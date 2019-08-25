import React from 'react';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import '../../common/Button/Button.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { BASE_URL } from '../../../config';

const Post = ({ singlePost, location }) => (
   
    <div id={singlePost.id}>
        <article className="post-summary">
            <PageTitle>{singlePost.title}</PageTitle>
            <HtmlBox>{singlePost.content}</HtmlBox>
            <p>Author: {singlePost.author}</p>
            <FacebookProvider appId="492529614857567">
                <ShareButton href={`${BASE_URL}/${location.pathname}`} className="button button--primary">
                    Udostępnij post
                </ShareButton>
            </FacebookProvider>
        </article> 
        <FacebookProvider appId="492529614857567">
            <Comments href={`${BASE_URL}/${location.pathname}`} />
        </FacebookProvider>
    </div>

);

Post.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string
}

export default withRouter(props => <Post {...props}/>);