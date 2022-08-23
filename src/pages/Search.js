import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useBook } from '../context/bookContext';
import BookCard from '../components/BookCard';

function Search() {
  const {
    searchResult,
    searchCount,
    searchError,
    searchLoading,
    search,
    changeSearchPage,
  } = useBook();

  const usersPerPage = 32;

  let { key } = useParams();
  let keyword = key.replace(':', '');
  let encodeKeyword = keyword.replace(' ', '%20');

  useEffect(() => {
    search(encodeKeyword);
  }, [search, encodeKeyword]);

  const changePage = ({ selected }) => {
    changeSearchPage(selected + 1);
  };

  return (
    <div>
      {!searchLoading && (
        <ReactPaginate
          pageCount={Math.ceil(searchCount / usersPerPage)}
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
      <div className="w-full flex justify-center gap-7 flex-wrap mt-8">
        {searchResult &&
          !searchLoading &&
          !searchError &&
          searchResult.map((book) => (
            <BookCard bookInfo={book} key={book?.id} />
          ))}
      </div>
    </div>
  );
}

export default Search;
