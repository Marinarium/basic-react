import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';
import Select from './components/UI/Select/Select';

function App() {
  const[posts, setPosts] = useState([
    { id: 1, title: 'React', description: 'Мощная и популярная библиотека JavaScript для разработки пользовательских интерфейсов. Она позволяет создавать эффективные и динамичные веб-приложения, используя компонентный подход и виртуальный DOM.' },
    { id: 2, title: 'MobX', description: 'Современная библиотека управления состоянием для приложений на платформе JavaScript, которая упрощает управление и реактивное обновление данных.' },
    { id: 3, title: 'Redux', description: 'Популярная библиотека управления состоянием в приложениях на JavaScript, которая обеспечивает предсказуемый поток данных и упрощает управление состоянием приложения через одно хранилище.' }
  ]);
  const [selectedValue, setSelectedValue] = useState('');

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
  };

  const removePost = (postId) => {
    setPosts([...posts.filter(p => p.id !== postId)]);
  };

  const sortPosts = (sortType) => {
    setSelectedValue(sortType);
    setPosts([...posts].sort((a, b) => a[sortType].localeCompare(b[sortType])));
  };

  return (
    <div className="app">
      <h1 className="title">Реактовая Революция: <br/>строим будущее, компонент за компонентом</h1>
      <PostForm create={createPost}/>
      <Select
        value={selectedValue}
        onChange={sortPosts}
        options={[{value: 'title', name: 'по названию'}, {value: 'description', name: 'по описанию'}]}
      />
      <PostList posts={posts} title='Экосистема React' remove={removePost}/>
    </div>
  );
}

export default App;
