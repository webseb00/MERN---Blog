import { connect } from 'react-redux';
import { 
  getPosts, 
  getRequest, 
  loadPostsByPageRequest, 
  getPages, 
  getInitialPage, 
  getPostsPerPage, 
  getPagination,
  getPresentPage } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialPage: getInitialPage(state),
  postsPerPage: getPostsPerPage(state),
  pagination: getPagination(state),
  presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);