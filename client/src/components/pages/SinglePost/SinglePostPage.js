import React from 'react';
import SinglePostContainer from './SinglePostContainer';

const SinglePostPage = props => (
    <div>
        <SinglePostContainer id={props.match.params.id} />
    </div>
)

export default SinglePostPage;