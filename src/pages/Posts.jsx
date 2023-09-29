import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Button from '../components/UI/Button/Button';
import Modal from '../components/UI/Modal/Modal';
import PostFilter from '../components/PostFilter';
import Loader from '../components/UI/Loader/Loader';
import PostList from '../components/PostList';
import Pagination from '../components/UI/Pagination/Pagination';
import PostForm from '../components/PostForm';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import { usePosts } from '../hooks/usePosts';

function Posts() {
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
    <>
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
      <Pagination total={pageCount} currentPage={page} changePage={changePage}/>
    </>
  );
}

export default Posts;
