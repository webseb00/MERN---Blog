import { connect } from 'react-redux';
import PostsCounter from './PostsCounter';
import { getPostsNumber } from '../../../redux/postsRedux';

const mapStateToProps = state => ({
    postsNumber: getPostsNumber(state)
});

export default connect(mapStateToProps)(PostsCounter);