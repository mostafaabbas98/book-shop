import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full my-4">
      <ul className="flex justify-center items-start gap-4 md:gap-16 text-xs md:text-sm font-medium text-gray-500 ">
        <li className="hover:text-indigo-900">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-900 after:content-["."] after:block after:text-center after:text-3xl after:-mt-6'
                : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-indigo-900 ">
          <NavLink
            to="books/popular"
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-900 after:content-["."] after:block after:text-center after:text-3xl after:-mt-6'
                : undefined
            }
          >
            Popular
          </NavLink>
        </li>
        <li className="hover:text-indigo-900">
          <NavLink
            to="*"
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-900 after:content-["."] after:block after:text-center after:text-3xl after:-mt-6'
                : undefined
            }
          >
            Category
          </NavLink>
        </li>
        <li className="hover:text-indigo-900 ">
          <NavLink
            to="*"
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-900 after:content-["."] after:block after:text-center after:text-3xl after:-mt-6'
                : undefined
            }
          >
            Find a store
          </NavLink>
        </li>
        <li className="hover:text-indigo-900 ">
          <NavLink
            to="*"
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-900 after:content-["."] after:block after:text-center after:text-3xl after:-mt-6'
                : undefined
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
