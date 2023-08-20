import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title}) => {
  return (
    <div className="posts">
      <h2 className="posts__title">{title}</h2>
      {posts.map((post, i) => <PostItem key={post.id} id={i+1} post={post} />)}
    </div>
  );
};

export default PostList;