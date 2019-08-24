import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
    
    componentDidMount() {
        const { loadPostsByPage, initialPage, postsPerPage } = this.props;
        loadPostsByPage(initialPage, postsPerPage);
    }

    componentDidUpdate() {
        const { request } = this.props;
        request.success = null;
    }

    loadPostsPage = (page) => {
        const { loadPostsByPage, postsPerPage } = this.props;
        loadPostsByPage(page, postsPerPage);
    }

    checkData() {
        const { posts, request, pages, initialPage, presentPage, pagination } = this.props;
        const { loadPostsPage } = this;     

        if ((request.pending === false) && 
            (request.success === true) && 
            (posts.length > 0)) 
        {
            return ( 
                <div>
                    <PostsList posts={posts} />
                    <Pagination 
                        pages={pages} 
                        onPageChange={loadPostsPage} 
                        initialPage={initialPage} 
                        pagination={pagination} 
                        presentPage={presentPage}
                    />
                </div>
            )
        } 
        else if (
            (request.pending === true) &&
            (request.success === null))
        {
           return <Spinner />;
        } else if (
            (request.pending === true) && 
            (request.error !== null)) 
        {
           return <Alert variant="error"></Alert>;
        } else if (
            (request.pending === false) && 
            (request.success === true) && 
            (posts.length === 0)) 
        {
            return <Alert variant="info">No posts added</Alert>;
        }
    }

    render() {
        return (
            <div>
                { this.checkData() }
            </div>
        )
    };

};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      })
    ),
    loadPostsByPage: PropTypes.func.isRequired,
    postsPerPage: PropTypes.number.isRequired,
    initialPage: PropTypes.number.isRequired,
    pagination: PropTypes.bool.isRequired
};

export default Posts;