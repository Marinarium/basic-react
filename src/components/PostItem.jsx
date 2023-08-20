import React from 'react';

const PostItem = ({post, id}) => {
  return (
    <div className="post">
      <h3 className="post__title">{id}. {post.title}</h3>
      <p className="post__desc">{post.description}</p>
      <div className="post__controls">
        <button className="post__btn">Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;