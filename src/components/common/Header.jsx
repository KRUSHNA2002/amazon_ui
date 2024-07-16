import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/header/logo.png';

const Header = () => {
  const categories = [
    "Electronics", "Clothing", "Home & Kitchen", "Beauty", "Toys",
    "Sports", "Automotive", "Books", "Movies & TV", "Music",
    "Video Games", "Pet Supplies", "Grocery", "Health"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to get the first character of the first word and last word of the user's name
  const getInitials = () => {
    if (user) {
      const nameParts = user.split(' ');
      const firstNameInitial = nameParts[0].charAt(0);
      const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
      return firstNameInitial + lastNameInitial;
    }
    return 'sign in'; 
  };

  return (
    <>
      <header className="bg-customBlue shadow-md text-white sticky top-0 z-50">
        <div className="container-fluid mx-auto py-3 flex justify-between items-center flex-wrap">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
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
              <select className='bg-gray-300 w-full h-full' name="" id="">
                {categories.map((category, index) => (
                  <option key={index} className="whitespace-nowrap hover:border-b hover:cursor-pointer">
                    {category}
                  </option>
                ))}
              </select>
            </button>
            <input type="text" className='p-2 h-full flex-grow text-black' placeholder='Search Amazon.in' />
            <button className='p-2 bg-orange-400 h-11 w-14'>
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
              <button onClick={()=>{navigate('/cart')}} ><i className="fa-solid fa-cart-shopping w-6 lg:w-8"></i></button>
              <span className='text-xs hidden lg:inline-block lg:text-xl'>Cart</span>
            </div>
          </div>
          <div className='sm:hidden inline-flex items-center bg-gray-200 rounded-md mx-auto overflow-hidden h-11 w-full max-w-3xl'>
            <input type="text" className='p-2 h-full w-full flex-grow' placeholder='Search Amazon.in' />
            <button className='p-2 bg-orange-400 h-11 w-14'>
              <i className="fa-solid fa-magnifying-glass text-black"></i>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="w-64 lg:hidden absolute top-0 bg-gray-100 text-black p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark focus:outline-none lg:hidden"
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
          <Link to="/" className="block py-1 border-b">Home</Link>
          <Link to="/about" className="block py-1 border-b">About</Link>
          <Link to="/services" className="block py-1 border-b">Services</Link>
          <Link to="/contact" className="block py-1">Contact</Link>
          <div className="border-t mt-2 pt-2">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 text-sm"
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
      )}
    </>
  );
};

export default Header;
