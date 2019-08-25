import React from 'react';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';
import Spinner from '../../common/Spinner/Spinner';
import { PropTypes } from 'prop-types';

class RandomPost extends React.Component {

    componentDidMount = () => {
        const { loadPosts } = this.props;
        loadPosts();
    }

    componentDidUpdate() {
        const { request } = this.props;
        request.success = null;
    }

    checkData = () => {
        const { getPosts, request } = this.props;

        const getRandomPost = Math.floor(Math.random() * getPosts.length);
        const detailPost = (getPosts && getPosts[getRandomPost]) || {};
        const { title, author, content, id } = detailPost;

        if ((request.pending === false) &&
            (request.success === true) &&
            (getPosts.length !== 0)) 
        {
            return (
                <div id={id}>
                    <article className="post-summary">
                        <PageTitle>{title}</PageTitle>
                        <HtmlBox>{content}</HtmlBox>
                        <p>Author: {author}</p>
                    </article> 
                </div>
            )
        } else if (
            (request.pending === true) && 
            (request.success === null)) 
        {
            return <Spinner />;
        }

    }

    render() {
        const { checkData } = this;

        return (
            <div>
                { checkData() }
            </div>
        )
    }
}

RandomPost.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    loadPosts: PropTypes.func.isRequired
}

export default RandomPost;