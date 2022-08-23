import { useNavigate } from 'react-router-dom';

function BookCard({ bookInfo }) {
  let navigation = useNavigate();
  return (
    <div
      className="h-[21rem] w-48 flex flex-col items-center justify-center hover:bg-[#F4E8DE] rounded-md cursor-pointer"
      onClick={() => navigation(`/books/:${bookInfo.id}`)}
    >
      <img
        src={bookInfo.formats['image/jpeg']}
        alt={bookInfo.title}
        className="w-40 h-52"
      />
      <h1 className="min-h-12 overflow-auto text-sm font-semibold self-center my-2">
        {bookInfo.title}
      </h1>
      <p className="text-xs">{bookInfo.authors[0]?.name || 'Unkonwen'} </p>
      <p className="text-sm text-yellow-500">{bookInfo.download_count}</p>
    </div>
  );
}

export default BookCard;
