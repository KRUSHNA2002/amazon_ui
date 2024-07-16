import React from 'react';
import {Link} from 'react-router-dom'
const Profile = () => {
  const user = localStorage.getItem('user');
  const mobile = localStorage.getItem('mobile');
  
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  const initial = getInitial(user);
  
  const logout=()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('mobile');
    localStorage.removeItem('token');
    localStorage.removeItem('alldata');
    window.location.href = '/';
  }
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">User Profile</h2>
          <p className="text-sm text-gray-600 mt-1">Welcome, {user}</p>
        </div>
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {initial}
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">User Mobile</p>
              <p className="text-xs text-gray-600">{mobile}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 py-2">
            <Link to="/" className="block text-sm text-gray-800 py-2 hover:bg-gray-200 px-3">Home</Link>
            <a href="#" className="block text-sm text-gray-800 py-2 hover:bg-gray-200 px-3">Orders</a>
            <a href="#" className="block text-sm text-gray-800 py-2 hover:bg-gray-200 px-3">Wishlist</a>
            <a href="#" className="block text-sm text-gray-800 py-2 hover:bg-gray-200 px-3">Settings</a>
            <a href="#" className="block text-sm text-gray-800 py-2 hover:bg-gray-200 px-3"  onClick={logout} >Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
