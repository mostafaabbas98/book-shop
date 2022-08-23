import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="w-full min-h-60 bg-[#F4E8DE] rounded-lg flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0 py-6">
      <div className="w-full text-center md:text-left md:w-3/12 leading-loose">
        <h2 className="text-indigo-900 text-2xl md:text-3xl font-bold">
          Build your library
        </h2>
        <p className="text-gray-500 text-md md:text-lg py-2 md:py-4">
          Buy two selected books and get one for free
        </p>
        <Link
          to="books/popular"
          className="bg-[#C1A792] text-white py-1 px-2 mt-3 rounded-md"
        >
          View all
        </Link>
      </div>
      <div className=" ">
        <img src="banner.svg" alt="" className="w-60  md:w-full md:h-full" />
      </div>
    </div>
  );
}

export default Hero;
