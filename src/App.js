import { useState } from 'react';
import { usePosts } from './hooks/usePosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import './styles/App.css';
import axios from 'axios';

function App() {
  const[posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ selectedType: '', searchQuery: '' });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.selectedType, filter.searchQuery);

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
    setPosts(response.data);
  }

  const removePost = (postId) => {
    setPosts([...posts.filter(p => p.id !== postId)]);
  };

  return (
    <div className="app">
      <h1 className="title">Реактовая Революция: <br/>строим будущее, компонент за компонентом</h1>
      <Button onClick={fetchPosts}>DATA</Button>
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
