import React from 'react';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';
import { PropTypes } from 'prop-types';

const Post = ({ singlePost }) => (
   
    <div id={singlePost.id}>
        <article className="post-summary">
            <PageTitle>{singlePost.title}</PageTitle>
            <HtmlBox>{singlePost.content}</HtmlBox>
            <p>Author: {singlePost.author}</p>
        </article> 
    </div>

);

Post.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string
}

export default Post;