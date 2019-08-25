import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsRequest } from '../../../redux/postsRedux';
import RandomPost from './RandomPost';

const mapStateToProps = state => ({
    getPosts: getPosts(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomPost);