/* eslint-disable no-nested-ternary */
const getPaginationOffsetRange = (page, limit) => {
  page = page || 1;

  return { offset: limit * (page - 1) };
};

const getResultAndCount = (list, page, limit) => {
  const { count, rows } = list;
  const pages = Math.ceil(count / limit);
  const cursors = {
    limit,
    currentPage: page,
    totalPages: pages,
    nextPage: page >= pages ? null : page + 1,
    previousPage: page === pages && page === 1 ? null : pages >= page && page > 1 ? page - 1 : null,
    hasNext: count < 1 ? false : page < pages,
    hasPrevious: page === 1 ? false : page >= pages ? true : page <= pages
  };

  return { results: rows, cursors, count };
};

module.exports = {
  getPaginationOffsetRange,
  getResultAndCount
};
