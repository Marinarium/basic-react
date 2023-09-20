import { useEffect, useState } from 'react';
import { usePosts } from './hooks/usePosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import './styles/App.css';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  const[posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ selectedType: '', searchQuery: '' });
  const [modal, setModal] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.selectedType, filter.searchQuery);

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
  };

  async function fetchPosts() {
    setIsPostLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostLoading(false);
  }

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
      {isPostLoading
        ? <Loader />
        : <PostList posts={sortedAndSearchedPosts} title='Экосистема React' remove={removePost}/>
      }
    </div>
  );
}

export default App;
