import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';

function App() {
  const[posts, setPosts] = useState([
    { id: 1, title: 'React', description: 'React - это мощная и популярная библиотека JavaScript для разработки пользовательских интерфейсов. Она позволяет создавать эффективные и динамичные веб-приложения, используя компонентный подход и виртуальный DOM.' },
    { id: 2, title: 'MobX', description: 'MobX - это современная библиотека управления состоянием для приложений на платформе JavaScript, которая упрощает управление и реактивное обновление данных.' },
    { id: 3, title: 'Redux', description: 'Redux - это популярная библиотека управления состоянием в приложениях на JavaScript, которая обеспечивает предсказуемый поток данных и упрощает управление состоянием приложения через одно хранилище.' }
  ]);

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <h1 className="title">Реактовая Революция: <br/>строим будущее, компонент за компонентом</h1>
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Экосистема React'/>
    </div>
  );
}

export default App;
