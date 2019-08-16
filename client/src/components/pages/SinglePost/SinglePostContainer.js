import { connect } from 'react-redux';
import SinglePost from './SinglePost';
import { getPost, getRequest, loadSinglePostRequest } from '../../../redux/postsRedux';

const mapStateToProps = state => ({
    singlePost: getPost(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadSinglePost: (id) => dispatch(loadSinglePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);