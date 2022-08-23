import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useBook } from '../context/bookContext';
import BookCard from '../components/BookCard';

function Home() {
  const { books, loading, error } = useBook();

  return (
    <div className="w-full flex flex-col">
      <Hero />
      <h3 className="text-2xl font-semibold mt-6">Bestseller</h3>
      <Link
        to="books/popular"
        className="text-right mr-4 -mt-6 text-sm font-light underline"
      >
        View all
      </Link>
      <div className="w-full flex justify-center gap-7 flex-wrap mt-8">
        {books &&
          !loading &&
          !error &&
          books
            .slice(0, 5)
            .map((book) => <BookCard bookInfo={book} key={book?.id} />)}
      </div>
    </div>
  );
}

export default Home;
