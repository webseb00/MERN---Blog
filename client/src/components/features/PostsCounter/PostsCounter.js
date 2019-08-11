import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  render() {

    const { postsNumber } = this.props;
    
    return (
      <div>Posts counter: { postsNumber === 0 ? ' -- no posts -- ' : postsNumber}</div>
    )
  }

};

PostsCounter.propTypes = {
  postsNumber: PropTypes.number.isRequired
}

export default PostsCounter;