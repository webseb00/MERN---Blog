import { connect } from 'react-redux';
import { getPosts, getRequest, updatePostRequest, loadPostsRequest } from '../../../redux/postsRedux';
import PostFormUpdate from './PostFormUpdate';

const mapStateToProps = state => ({
    getPosts: getPosts(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    updatePost: (updatedPost, id) => dispatch(updatePostRequest(updatedPost, id)),
    loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormUpdate);