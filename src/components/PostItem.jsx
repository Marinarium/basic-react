import React from 'react';
import Button from './UI/Button/Button';

const PostItem = ({post, id, remove}) => {
  return (
    <div className="post">
      <h3 className="post__title">{id}. {post.title}</h3>
      <p className="post__desc">{post.description}</p>
      <div className="post__controls">
        <Button onClick={() => {remove(post.id)}}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;