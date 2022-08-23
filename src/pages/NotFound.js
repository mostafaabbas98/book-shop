import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-16">
      <h1 className="text-4xl font-bold mb-6">This Page NotFound</h1>
      <p className="text-lg">
        Browse Popular Books{' '}
        <Link
          to="books/popular"
          className="text-indigo-900 font-semibold italic"
        >
          here
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
