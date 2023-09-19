import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
  return (
    <div className="posts">
      <h2 className="posts__title">{title}</h2>
      {
        posts.length !== 0
          ? <TransitionGroup>
              {posts.map((post, i) => <CSSTransition
                key={post.id}
                timeout={500}
                classNames="animated"
              >
                <PostItem id={i + 1} post={post} remove={remove}/>
              </CSSTransition>)}
            </TransitionGroup>
          : <p>Как-так?! Ничего нет?! Добавь карточку ;)</p>
      }
    </div>
  );
};

export default PostList;