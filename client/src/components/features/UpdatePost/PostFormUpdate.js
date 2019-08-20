import React from 'react';
import { PropTypes } from 'prop-types';

import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './PostFormUpdate.scss';

class PostFormUpdate extends React.Component {

    state = {
        post: {
            title: '',
            author: '',
            content: ''
        }
    }

    componentWillMount() {
        this.findPost();
    }

    // get data and inject them to the state
    findPost() {
        const { getPosts, routeId } = this.props;
        if(getPosts.length === 0) {
            this.setState({ 
                post: {
                    title: '',
                    author: '',
                    content: ''
                }
            });
        } else {
            const getSinglePost = getPosts.find(post => post.id === routeId); 
            const { title, author, content } = getSinglePost;
            this.setState({ 
                post: {
                    title,
                    author,
                    content
                }
            });
        }
    }

    updatePost = (e) => {
        const { updatePost, routeId } = this.props;
        const { post } = this.state;

        e.preventDefault();
        updatePost(post, routeId);
    }

    updateField = (e) => {
        const { post } = this.state;
        this.setState({ post: {...post, [e.target.name]: e.target.value} });
    }

    handleEditor = (text) => {
        const { post } = this.state;
        this.setState({ post: {...post, content: text} });
    }

    render() {
        const { request } = this.props;
        const { post } = this.state;
        const { updateField, handleEditor, updatePost } = this;

        if(request.error) return <Alert variant="error">{request.error}</Alert>;
        else if(request.success) return <Alert variant="success">Post has been updated!</Alert>;
        else if(request.pending) return <Spinner />;
        else return (
            <form onSubmit={updatePost}>
                <TextField 
                    label="Title"
                    value={post.title}
                    name="title"
                    onChange={updateField}
                />

                <TextField 
                    label="Author"
                    value={post.author}
                    name="author"
                    onChange={updateField}
                />

                <SectionTitle>Edit Post Content</SectionTitle>

                <Editor
                    className="content-editor"
                    text={post.content}
                    onChange={handleEditor}
                    options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
                />

                <Button variant="primary">Update post</Button>
            </form>
        )
    }
}

export default PostFormUpdate;