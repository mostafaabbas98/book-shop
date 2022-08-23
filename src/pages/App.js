import { Route, Routes } from 'react-router-dom';
import BookProvider from '../context/bookContext';
import Layout from '../components/Layout';
import Home from './Home';
import Books from './Books';
import Book from './Book';
import Search from './Search';
import BooksList from './BooksList';

function App() {
  return (
    <BookProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books" element={<Books />}>
            <Route path=":bookid" element={<Book />} />
            <Route path="popular" element={<BooksList />} />
          </Route>
          <Route path="/search:key" element={<Search />} />
        </Routes>
      </Layout>
    </BookProvider>
  );
}

export default App;
