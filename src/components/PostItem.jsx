import React from 'react';
import Button from './UI/Button/Button';
import { useNavigate } from "react-router-dom"

const PostItem = ({post, remove}) => {
  const navigate = useNavigate();


  return (
    <div className="post">
      <h3 className="post__title">{post.id}. {post.title}</h3>
      <p className="post__desc">{post.body}</p>
      <div className="post__controls">
        <Button onClick={() => {navigate(`/posts/${post.id}`)}}>Подробнее</Button>
        <Button danger onClick={() => {remove(post.id)}}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;