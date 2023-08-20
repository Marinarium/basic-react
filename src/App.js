import { useState } from 'react';
import PostList from './components/PostList';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';
import './styles/App.css';

function App() {
  const[posts, setPosts] = useState([
    { id: 1, title: 'React', description: 'React - это мощная и популярная библиотека JavaScript для разработки пользовательских интерфейсов. Она позволяет создавать эффективные и динамичные веб-приложения, используя компонентный подход и виртуальный DOM.' },
    { id: 2, title: 'MobX', description: 'MobX - это современная библиотека управления состоянием для приложений на платформе JavaScript, которая упрощает управление и реактивное обновление данных.' },
    { id: 3, title: 'Redux', description: 'Redux - это популярная библиотека управления состоянием в приложениях на JavaScript, которая обеспечивает предсказуемый поток данных и упрощает управление состоянием приложения через одно хранилище.' }
  ]);
  const [post, setPost] = useState({title: '', description: ''});

  const addPost = () => {
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', description: ''});
  };

  return (
    <div className="app">
      <h1 className="title">Реактовая Революция: <br/>строим будущее, компонент за компонентом</h1>
      <form action="#" className="form">
        <h2 className="form__title">Добавьте новую шпаргалку</h2>
        <Input value={post.title} onChange={e => setPost({...post, title: e.target.value})} id="topic" label="Заголовок" type="text"/>
        <Input value={post.description} onChange={e => setPost({...post, description: e.target.value})} id="description" label="Описание" type="text"/>
        <Button type="button" onClick={addPost}>Добавить!</Button>
      </form>
      <PostList posts={posts} title='Экосистема React'/>
    </div>
  );
}

export default App;
