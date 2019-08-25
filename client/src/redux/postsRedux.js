import axios from 'axios';
import { API_URL } from '../config';

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

export const START_REQUEST = createActionName('START_REQUEST');
export const startRequest = () => ({ type: START_REQUEST });

export const END_REQUEST = createActionName('END_REQUEST');
export const endRequest = () => ({ type: END_REQUEST });

export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const GET_SINGLE_POST = createActionName('GET_SINGLE_POST');
export const getSinglePost = payload => ({ payload, type: GET_SINGLE_POST });

export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });

// get posts
export const getPosts = ({ posts }) => posts.data;
// get number of all posts
export const getPostsNumber = ({ posts }) => posts.data.length;

export const getRequest = ({ posts }) => posts.request;

export const getPost = ({ posts }) => posts.singlePost; 

export const getPages = ({ posts }) => Math.ceil(posts.amount / posts.postsPerPage);

export const getInitialPage = ({ posts }) => posts.initialPage;

export const getPresentPage = ({ posts }) => posts.presentPage;

const initialState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null
    },
    singlePost: {},
    amount: 0,
    presentPage: null,
    initialPage: 1
};

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return { ...statePart, data: action.payload };
        case START_REQUEST:
            return { ...statePart, request: { pending: true, error: null, success: null } };
        case END_REQUEST:
            return { ...statePart, request: { pending: false, error: null, success: true } };
        case ERROR_REQUEST:
            return { ...statePart, request: { pending: false, error: action.error, success: false } };
        case GET_SINGLE_POST:
            return { ...statePart, singlePost: action.payload };
        case LOAD_POSTS_PAGE:
            return {
                ...statePart,
                postsPerPage: action.payload.postsPerPage,
                presentPage: action.payload.presentPage,
                amount: action.payload.amount,
                data: [...action.payload.posts],
            };
        default:
            return statePart;
    }
};

// THUNKS:

// get all posts
export const loadPostsRequest = () => {
    return async dispatch => {
        dispatch(startRequest());
        try {
            let res = await axios.get(`${API_URL}/posts`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(loadPosts(res.data));
            dispatch(endRequest());
        } catch (e) {
            dispatch(errorRequest(e.message));
        }
        
    };
};

//get single post
export const loadSinglePostRequest = (id) => {
    return async dispatch => {
        dispatch(startRequest());
        try {
            let res = await axios.get(`${API_URL}/posts/${id}`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(getSinglePost(res.data));
            dispatch(endRequest());
        } catch (e) {
            dispatch(errorRequest(e.message));
        }
    }
};

//add new post
export const addPostRequest = (post) => {
    return async dispatch => {
        dispatch(startRequest());
        try {
            let res = await axios.post(`${API_URL}/posts`, post);
            await new Promise((resolve, reject) =>  setTimeout(resolve, 2000));
            dispatch(endRequest());
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    }
};

//update post
export const updatePostRequest = (updatedPost, id) => {
    return async dispatch => {
        dispatch(startRequest());
        try {
            let res = await axios.post(`${API_URL}/posts/${id}/edit`, updatedPost);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(endRequest());
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    }
};

// get posts by range
export const loadPostsByPageRequest = (page, postsPerPage) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            const startAt = (page-1) * postsPerPage;
            const limit = postsPerPage;

            let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));

            const payload = {
                posts: res.data.posts,
                amount: res.data.amount,
                postsPerPage,
                presentPage: page
            };

            dispatch(loadPostsByPage(payload));
            dispatch(endRequest());

        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    }
};