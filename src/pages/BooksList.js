import React from 'react';
import BookCard from '../components/BookCard';
import { useBook } from '../context/bookContext';
import ReactPaginate from 'react-paginate';

function BooksList() {
  const { books, booksCount, booksError, booksLoading, changePageNumber } =
    useBook();

  const usersPerPage = 32;
  const changePage = ({ selected }) => {
    changePageNumber(selected + 1);
  };

  if (booksLoading) {
    return <p>Loading</p>;
  }

  if (booksError) {
    return <p>Somethin went wrong</p>;
  }

  return (
    <div className="">
      <div className="w-full flex justify-center gap-7 flex-wrap mt-8">
        {books &&
          !booksLoading &&
          !booksError &&
          books.map((book) => <BookCard bookInfo={book} key={book?.id} />)}
      </div>
      {!booksLoading && !booksError && (
        <ReactPaginate
          pageCount={Math.ceil(booksCount / usersPerPage)}
          onPageChange={changePage}
          breakLabel="..."
          nextLabel="Next >"
          previousLabel="< Previous"
          containerClassName={
            'w-full flex justify-between  md:justify-evenly items-center bg-slate-100 py-1 rounded-md'
          }
          nextClassName={
            'hover:bg-indigo-900 px-1 md:px-2 py-1 hover:rounded-md hover:text-white text-xs md:text-sm'
          }
          previousClassName={
            'hover:bg-indigo-900 px-1 md:px-2 py-1 hover:rounded-md hover:text-white text-xs md:text-sm'
          }
          pageClassName={
            'px-1 md:px-2 py-1 rounded hover:bg-indigo-900 hover:text-white'
          }
          activeClassName={'bg-indigo-900 text-white'}
          pageLinkClassName={'font-semibold'}
        />
      )}
    </div>
  );
}

export default BooksList;
