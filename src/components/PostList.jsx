import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  return (
    <div className="posts">
      <h2 className="posts__title">{title}</h2>
      {
        posts.length !== 0
          ? posts.map((post, i) => <PostItem key={post.id} id={i+1} post={post} remove={remove}/>)
          : <p>Как-так?! Ничего нет?! Добавь карточку ;)</p>
      }
    </div>
  );
};

export default PostList;