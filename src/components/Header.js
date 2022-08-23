import { useRef } from 'react';
import { BsHeart, BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const inputRef = useRef();
  let navigate = useNavigate();

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (e.current.value) {
      navigate(`search:${inputRef.current.value}`, {
        state: { search: inputRef.current.value },
      });
    }
  };

  return (
    <header className="flex justify-between items-center">
      <Link to="/" className="font-semibold text-xl">
        <h1>Booksy</h1>
      </Link>
      <form className="relative w-8/12  md:w-7/12" onSubmit={handelFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by auther, title, name"
          className="bg-gray-100 w-full px-4 py-2 rounded-md outline-none text-sm"
        />
        <BsSearch
          type="submit"
          className="absolute top-1/2 right-4 -translate-y-1/2 text-xs cursor-pointer "
        />
      </form>
      <div className="md:flex items-center gap-5 hidden">
        <BsHeart />
        <span className="block bg-indigo-900 text-white px-[10px] py-[6px] text-xs rounded-full ml-1">
          0
        </span>
        <button className="text-sm font-medium text-gray-600">EN</button>
      </div>
    </header>
  );
}

export default Header;
