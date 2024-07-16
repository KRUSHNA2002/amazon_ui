import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import AddtoCart from './components/AddtoCart';
import Cart from './components/Cart';
import MultiDetails from './components/common/MultiDetails';
import Placeorder from './components/Placeorder';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/utils/ProtectedRoute';
// import Password from './components/auth/Password';
// import Otp from './components/auth/Otp';
// import { AuthProvider } from './components/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute'; // Ensure correct path

function App() {
  return (
    <Router>
      {/* <Header />
        <MiniHeader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoute/>} >
          <Route path="/placeorder" element={<Placeorder />} />
        </Route>
        <Route path="/multidetails" element={<MultiDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/password" element={<Password />} /> */}
        {/* <Route path='/otp' element={<Otp />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
