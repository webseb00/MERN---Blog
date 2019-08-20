import React from 'react';
import UpdatePostPage from '../../features/UpdatePost/PostFormUpdateContainer';

const PostFormUpdatePage = props => (
    <div>
        <h1>Update post</h1>
        <UpdatePostPage routeId={props.match.params.id} />
    </div>
);

export default PostFormUpdatePage;