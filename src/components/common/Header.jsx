import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/header/logo.png';

const Header = () => {
  const categories = [
    "Electronics", "Sport", "golden swag", "addidas", "wearing",
    "denight light"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = localStorage.getItem('user');
      setUser(user); // Set to 'user' or fetch the actual user data
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when sidebar is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getInitials = () => {
    if (user) {
      const nameParts = user.split(' ');
      const firstNameInitial = nameParts[0].charAt(0);
      const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
      return firstNameInitial + lastNameInitial;
    }
    return 'sign in';
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    let query = `/search?q=${encodeURIComponent(searchInput)}`;
    if (selectedCategory) {
      query += `${encodeURIComponent(selectedCategory)}`;
    }
    navigate(query);
  };

  return (
    <>
      <header className="bg-customBlue shadow-md text-white sticky top-0 z-50">
        <div className="container-fluid mx-auto py-3 flex justify-between items-center flex-wrap">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
            <div className='p-2 hover:border-b'>
              <Link to="/"><img src={Logo} alt="Amazon Logo" className='w-28' /></Link>
            </div>
          </div>
          <div className='hidden lg:block text-center paddingheader hover:border-b'>
            <p className='text-xs lg:text-sm'>Delivering to Pune 440033</p>
            <b className='cursor-pointer text-xs lg:text-base'><i className="fa-solid fa-location-dot"></i> Update Location</b>
          </div>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-md overflow-hidden h-11 w-full max-w-3xl'>
            <button className='bg-gray-300 text-black font-bold p-2 h-11'>
              <select
                className='bg-gray-300 w-full h-full'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category} className="whitespace-nowrap hover:border-b hover:cursor-pointer">
                    {category}
                  </option>
                ))}
              </select>
            </button>
            <input
              type="text"
              className='p-2 h-full flex-grow text-black'
              value={searchInput}
              onChange={handleInputChange}
              placeholder='Search Amazon.in'
            />
            <button className='p-2 bg-orange-400 h-11 w-14' onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass text-black"></i>
            </button>
          </div>
          <div className="hidden lg:block ml-4 paddingheader hover:border-b">
            <select className='bg-customBlue text-white' name="" id="">
              <option value="">EN</option>
              <option value="">HN</option>
              <option value="">MA</option>
            </select>
          </div>
          <div className="hidden lg:block ml-4 paddingheader hover:border-b relative">
            <button className='text-center' onClick={toggleDropdown}>
              <Link className='hover:text-white' to="">
                <p>{getInitials()}</p>
                <b className='text-xs lg:text-base'>Account & Lists</b>
              </Link>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg z-20">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-center px-4 py-2 text-sm"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-2 text-sm"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="hidden lg:block ml-4 p-1 hover:border-b">
            <button>
              <p className='text-xs lg:text-sm'>Returns</p>
              <b className='text-xs lg:text-base'>& Orders</b>
            </button>
          </div>
          <div className="p-2 ">
            <div className="p-0">
              <div className='md:hidden inline-flex'>
                <p className='mr-3'>{getInitials()}</p>
                <button className='mr-5' onClick={toggleDropdown}><i className="fa-solid fa-user text-white"></i></button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg z-20">
                    {user ? (
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-center px-4 py-2 text-sm"
                      >
                        Sign out
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="block w-full text-center px-4 py-2 text-sm"
                      >
                        Sign in
                      </Link>
                    )}
                  </div>
                )}
              </div>
              <button onClick={() => { navigate('/cart') }} ><i className="fa-solid fa-cart-shopping w-6 lg:w-8"></i></button>
              <span className='text-xs hidden lg:inline-block lg:text-xl'>Cart</span>
            </div>
          </div>
          <div className='sm:hidden inline-flex items-center bg-gray-200 rounded-md mx-auto overflow-hidden h-11 w-full max-w-3xl'>
            <input type="text"
              value={searchInput}
              onChange={handleInputChange}
              className='p-2 text-black h-full w-full flex-grow'
              placeholder='Search Amazon.in'
            />
            <button className='p-2 bg-orange-400 h-11 w-14' onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass text-black"></i>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <>
          <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-gray-100 z-50 opacity-70"></div>
          <div className="lg:hidden absolute top-0 left-0 w-full h-full overflow-auto z-50">
            <div className={`bg-white h-full w-4/5 max-w-sm p-4 fixed top-0 left-0 transform transition-transform ease-in-out duration-5000 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <button
                onClick={toggleMenu}
                className="text-dark focus:outline-none absolute right-0 top-0 p-4"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
              <div className="mt-16">
                <Link to="/profile" className="block py-2 border-b">Profile</Link>
                <Link to="/cart" className="block py-2 border-b">Cart</Link>
                {/* <Link to="/services" className="block py-2 border-b">Services</Link> */}
                {/* <Link to="/contact" className="block py-2">Contact</Link> */}
              </div>
              <div className="border-t mt-4 pt-4">
                <button
                  onClick={toggleDropdown}
                  className="block w-full text-center px-4 py-2 text-sm btn btn-dark"
                >
                  {getInitials()}
                </button>
                {dropdownOpen && (
                  <div className="pl-4">
                    {user ? (
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm"
                      >
                        Sign out
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="block w-full text-left px-4 py-2 text-sm"
                      >
                        Sign in
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
