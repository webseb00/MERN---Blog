import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {
    
    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    checkData() {
        const { posts, request } = this.props;     

        if ((request.pending === false) && 
            (request.success === true) && 
            (posts.length > 0)) 
        {
            return <PostsList posts={posts} />;
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
      })
    ),
    loadPosts: PropTypes.func.isRequired,
  };

export default Posts;