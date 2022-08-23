import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from '../context/bookContext';

function Book() {
  const { singleBook, changePageID, bookLoading } = useBook();
  const { bookid } = useParams();

  useEffect(() => {
    changePageID(bookid.replace(':', ''));
  }, [changePageID, bookid]);

  return (
    !bookLoading && (
      <div className="flex flex-col md:flex-row justify-around items-center mt-8 py-4 gap-4 md:gap-0">
        <div>
          <img
            src={singleBook && singleBook?.formats['image/jpeg']}
            alt={singleBook && singleBook.title}
            className="w-52"
          />
        </div>
        <div className="w-2/3 leading-loose">
          <h1 className="text-3xl font-semibold md:font-bold">
            {singleBook && singleBook?.title}
          </h1>
          <p>
            written by <em>{singleBook && singleBook?.authors[0]?.name}</em>
          </p>
          <p>
            Download count <b>{singleBook?.download_count}</b>
          </p>
          <div>
            <ul className="flex flex-wrap">
              <strong>Category</strong> : &nbsp;
              {singleBook?.subjects.map((sub, idx) => (
                <li key={idx}>{sub.replace('--', ' ')}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default Book;
