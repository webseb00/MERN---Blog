import React from 'react';
import Post from './Post';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { loadSinglePost, id } = this.props;
        loadSinglePost(id);
    }

    checkData() {
        const { singlePost, request } = this.props;

        if ((request.pending === false) &&
            (request.success === true) &&
            (singlePost !== null)) 
        {
            return <Post singlePost={singlePost} />
        } else if (
            (request.pending === true) && 
            (request.success === null)) 
        {
            return <Spinner />;
        } else if (singlePost === null) 
        {
            return <Alert variant='error'>Post not found ;-(</Alert>
        }
    }
    
    render() {      
        return (
            <div>
                { this.checkData() }
            </div>
        )
    }
}

export default SinglePost;