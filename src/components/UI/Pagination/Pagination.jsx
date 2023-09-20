import React from 'react';
import Button from '../Button/Button';
import { getPagesArray } from '../../../utils/pages';
import styles from './Pagination.module.css';

const Pagination = ({total, currentPage, changePage}) => {
  let pagesArray = getPagesArray(total);

  return (
    <div className={styles.pagination}>{pagesArray.map(p =>
      <Button key={p} accent={p === currentPage} onClick={() => changePage(p)} small>{p}</Button>
    )}</div>
  );
};

export default Pagination;