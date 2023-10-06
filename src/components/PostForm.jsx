import React from 'react';
import { useState } from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', description: '' });

  const addPost = () => {
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', description: '' });
  };

  return (
    <form action="#" className="form">
      <h2 className="form__title">Добавьте новую шпаргалку</h2>
      <Input value={post.title}
             onChange={e => setPost({ ...post, title: e.target.value })}
             id="topic"
             label="Заголовок"
             type="text"/>
      <Input value={post.description}
             onChange={e => setPost({ ...post, description: e.target.value })}
             id="description"
             label="Описание"
             type="text"/>
      <br/>
      <Button type="button" onClick={addPost}>Добавить!</Button>
    </form>
  );
};

export default PostForm;