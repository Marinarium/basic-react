import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import Comment from '../components/Comment';

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostByID, isLoading] = useFetching(async () => {
    const response = await PostService.getPostByID(params.id);
    setPost(response.data);
  });

  const [fetchComments, isLoadingComments] = useFetching(async () => {
    const response = await PostService.getCommentsByID(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostByID();
    fetchComments();
  }, []);

  return (
    <div>
      {isLoading
        ? <Loader/>
        : <>
          <h1>{post.id} {post.title}</h1>
          <p style={{ marginBottom: '70px' }}>{post.body}</p>
        </>
      }
      {isLoadingComments
        ? <Loader/>
        : <>
          <h2>Comments</h2>
          {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </>
      }
    </div>
  );
};

export default Post;