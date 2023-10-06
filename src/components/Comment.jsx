import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h3 className="comment__title">{comment.email}</h3>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;