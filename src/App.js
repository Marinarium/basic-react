import { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import './styles/App.css';

function App() {
  const[posts, setPosts] = useState([
    { id: 1, title: 'React', description: 'Мощная и популярная библиотека JavaScript для разработки пользовательских интерфейсов. Она позволяет создавать эффективные и динамичные веб-приложения, используя компонентный подход и виртуальный DOM.' },
    { id: 2, title: 'MobX', description: 'Современная библиотека управления состоянием для приложений на платформе JavaScript, которая упрощает управление и реактивное обновление данных.' },
    { id: 3, title: 'Redux', description: 'Популярная библиотека управления состоянием в приложениях на JavaScript, которая обеспечивает предсказуемый поток данных и упрощает управление состоянием приложения через одно хранилище.' }
  ]);

  const [filter, setFilter] = useState({ selectedType: '', searchQuery: '' });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.selectedType) {
      return [...posts].sort((a, b) => a[filter.selectedType].localeCompare(b[filter.selectedType]));
    }

    return posts;
  }, [filter.selectedType, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()));
  }, [filter.searchQuery, sortedPosts]);

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
  };

  const removePost = (postId) => {
    setPosts([...posts.filter(p => p.id !== postId)]);
  };

  return (
    <div className="app">
      <h1 className="title">Реактовая Революция: <br/>строим будущее, компонент за компонентом</h1>
      <Button onClick={() => setModal(!modal)} addClass={"button-add"}>Добавить запись</Button>
      <Modal active={modal} setActive={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <PostFilter filter={filter} updateFilter={setFilter}/>
      <PostList posts={sortedAndSearchedPosts} title='Экосистема React' remove={removePost}/>
    </div>
  );
}

export default App;
