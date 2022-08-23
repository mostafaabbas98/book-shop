import React, { useContext, useEffect, useState } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const bookContext = React.createContext({});

export const useBook = () => {
  return useContext(bookContext);
};

function BookProvider({ children }) {
  const [booksURL, setBooksURL] = useState('');
  const [books, setBooks] = useState([]);

  const [bookURL, setBookURL] = useState('');
  const [singleBook, setSingleBook] = useState({});

  const [searchURL, setSearchURL] = useState('');
  const [searchResult, setSearchResult] = useState();

  const [booksCount, setBooksCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [bookID, setBookID] = useState(0);
  const [searchPage, setSearchPage] = useState(1);
  const [searchCount, setSearchCount] = useState(0);

  const {
    data: booksData,
    error: booksError,
    errorMessage: booksErrorMsg,
    loading: booksLoading,
  } = useAxiosFetch(booksURL);

  const {
    data: bookData,
    error: bookError,
    errorMessage: bookErrorMsg,
    loading: bookLoading,
  } = useAxiosFetch(bookURL);

  const {
    data: searchData,
    error: searchError,
    errorMessage: searchErrorMsg,
    loading: searchLoading,
  } = useAxiosFetch(searchURL);

  useEffect(() => {
    setBooksURL(`https://gutendex.com/books/?page=${pageNumber}`);
    setBooks(booksData?.results);

    setBooksCount(booksData?.count);
  }, [booksData, pageNumber]);

  useEffect(() => {
    if (bookID > 0) {
      setBookURL(`https://gutendex.com/books/${bookID}`);
      setSingleBook(bookData);
    }
  }, [bookData, bookID]);

  const search = (keyword) => {
    keyword = keyword.replace(':', '');
    if (keyword) {
      setSearchURL(
        `https://gutendex.com/books?page=${searchPage}&search=${keyword}`
      );
      setSearchResult(searchData?.results);
      setSearchCount(searchData?.count);
    }
  };

  const changePageNumber = (number) => {
    setPageNumber(number);
  };

  const changePageID = (id) => {
    setBookID(id.replace(':', ''));
  };

  const changeSearchPage = (number) => {
    setSearchPage(number);
  };

  const value = {
    books,
    booksCount,
    booksError,
    booksErrorMsg,
    booksLoading,
    singleBook,
    bookError,
    bookErrorMsg,
    bookLoading,
    searchResult,
    searchCount,
    searchError,
    searchErrorMsg,
    searchLoading,
    changePageNumber,
    changePageID,
    search,
    changeSearchPage,
  };
  return <bookContext.Provider value={value}>{children}</bookContext.Provider>;
}

export default BookProvider;
