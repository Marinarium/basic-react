export const getPageCount = (total, limit) => {
  return Math.ceil(total / limit);
}

export const getPagesArray = (pageCount) => {
  let pagesArray = [];

  for (let i = 0; i < pageCount; i++) {
    pagesArray.push(i + 1);
  }

  return pagesArray;
}