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
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';

function App() {
  const[posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ selectedType: '', searchQuery: '' });
  const [modal, setModal] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalPosts = response.headers['x-total-count'];
    setPageCount(getPageCount(totalPosts, limit));
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.selectedType, filter.searchQuery);

  let pagesArray = getPagesArray(pageCount);

  useEffect(() => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
  };

  const removePost = (postId) => {
    setPosts([...posts.filter(p => p.id !== postId)]);
  };
  
  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="app">
      <h1 className="title">Реактовая Революция: <br/>строим будущее, компонент за компонентом</h1>
      <Button onClick={() => setModal(!modal)} addClass={"button-add"}>Добавить запись</Button>
      <Modal active={modal} setActive={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <PostFilter filter={filter} updateFilter={setFilter}/>
      {postError && <p>Произошла ошибка ${postError}</p>}
      {isPostLoading
        ? <Loader />
        : <PostList posts={sortedAndSearchedPosts} title='Экосистема React' remove={removePost}/>
      }
      <div className="pagination">{pagesArray.map(p =>
        <Button key={p} accent={p === page} onClick={() => changePage(p)} small>{p}</Button>
      )}</div>
    </div>
  );
}

export default App;
