import Logo from '../../assets/header/logo.png';
import { Link } from 'react-router-dom'
const Footer = () => {

  const backtotop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="text-white mt-3">
      <div className="container-fluid bg-gray-700 mx-auto grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex justify-center items-center p-4">
          <h4 className="font-bold text-center"><button onClick={backtotop} >Back to Top</button></h4>
        </div>
      </div>

      <div className="bg-gray-800 container-fluid  ">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10   ">
          <div>
            <h5 className="font-bold mb-2 text-xl">Get to Know Us</h5>
            <ul>
              <li><Link to="/careers" className="text-white hover:text-blue-700">Careers</Link></li>
              <li><Link to="/newsletter" className="text-white hover:text-blue-700">Amazon Newsletter</Link></li>
              <li><Link to="/about" className="text-white hover:text-blue-700">About Amazon</Link></li>
              <li><Link to="/sustainability" className="text-white hover:text-blue-700">Sustainability</Link></li>
              <li><Link to="/press" className="text-white hover:text-blue-700">Press Center</Link></li>
              <li><Link to="/investor" className="text-white hover:text-blue-700">Investor Relations</Link></li>
              <li><Link to="/devices" className="text-white hover:text-blue-700">Amazon Devices</Link></li>
              <li><Link to="/science" className="text-white hover:text-blue-700">Amazon Science</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-xl">Make Money with Us</h5>
            <ul>
              <li><Link to="/sell" className="text-white hover:text-blue-700">Sell products on Amazon</Link></li>
              <li><Link to="/sell-apps" className="text-white hover:text-blue-700">Sell apps on Amazon</Link></li>
              <li><Link to="/supply" className="text-white hover:text-blue-700">Supply to Amazon</Link></li>
              <li><Link to="/brand" className="text-white hover:text-blue-700">Protect & Build Your Brand</Link></li>
              <li><Link to="/affiliate" className="text-white hover:text-blue-700">Become an Affiliate</Link></li>
              <li><Link to="/driver" className="text-white hover:text-blue-700">Become Link Delivery Driver</Link></li>
              <li><Link to="/delivery-business" className="text-white hover:text-blue-700">Start Link package delivery business</Link></li>
              <li><Link to="/advertise" className="text-white hover:text-blue-700">Advertise Your Products</Link></li>
              <li><Link to="/publish" className="text-white hover:text-blue-700">Self-Publish with Us</Link></li>
              <li><Link to="/hub" className="text-white hover:text-blue-700">Host an Amazon Hub</Link></li>
              <li><Link to="/more" className="text-white hover:text-blue-700">See More Make Money with Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-xl">Amazon Payment Products</h5>
            <ul>
              <li><Link to="/rewards" className="text-white hover:text-blue-700">Amazon Rewards Visa Signature Cards</Link></li>
              <li><Link to="/store-card" className="text-white hover:text-blue-700">Amazon Store Card</Link></li>
              <li><Link to="/secured-card" className="text-white hover:text-blue-700">Amazon Secured Card</Link></li>
              <li><Link to="/business-card" className="text-white hover:text-blue-700">Amazon Business Card</Link></li>
              <li><Link to="/credit-line" className="text-white hover:text-blue-700">Amazon Business Line of Credit</Link></li>
              <li><Link to="/points" className="text-white hover:text-blue-700">Shop with Points</Link></li>
              <li><Link to="/marketplace" className="text-white hover:text-blue-700">Credit Card Marketplace</Link></li>
              <li><Link to="/reload" className="text-white hover:text-blue-700">Reload Your Balance</Link></li>
              <li><Link to="/converter" className="text-white hover:text-blue-700">Amazon Currency Converter</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-xl">Let Us Help You</h5>
            <ul>
              <li><Link to="/covid-19" className="text-white hover:text-blue-700">Amazon and COVID-19</Link></li>
              <li><Link to="/account" className="text-white hover:text-blue-700">Your Account</Link></li>
              <li><Link to="/orders" className="text-white hover:text-blue-700">Your Orders</Link></li>
              <li><Link to="/shipping" className="text-white hover:text-blue-700">Shipping Rates & Policies</Link></li>
              <li><Link to="/prime" className="text-white hover:text-blue-700">Amazon Prime</Link></li>
              <li><Link to="/returns" className="text-white hover:text-blue-700">Returns & Replacements</Link></li>
              <li><Link to="/content" className="text-white hover:text-blue-700">Manage Your Content and Devices</Link></li>
              <li><Link to="/recalls" className="text-white hover:text-blue-700">Your Recalls and Product Safety Alerts</Link></li>
              <li><Link to="/help" className="text-white hover:text-blue-700">Help</Link></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className='container-fluid bg-gray-800'>
          <div className='flex flex-row md:flex-row  sm:flex-row justify-center items-center text-center h-20'>
            <div className='flex justify-center items-center p-3'>
              <img src={Logo} alt="logo" className='h-18 w-24' />
            </div>
            <div className='flex justify-center items-center gap-5 p-4'>
              <span className='border p-1 pe-8 rounded flex items-center'>
                <i className="fa-solid fa-globe p-2"></i>
                <button>English</button>
              </span>
              <span className='border p-1 pe-4 rounded flex items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQXo7eUZqYL9_br-pTPTkbowPp_JvvFdqw&s" className='h-4 w-6 mr-2 ps-2' alt="flag" />
                <button>India</button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-slate-900'>
        <div className='container grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1 gap-8 mx-auto text-center p-6'>
          <div>
            <h4>AbeBooks</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >Book Art & collectionable</Link></li>
            </ul>
          </div>

          <div>
            <h4>Amazon Web Services</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >Scalable Cloud </Link></li>
              <li><Link to="#" className='hover:text-blue-400' >Computing Service </Link></li>
            </ul>
          </div>

          <div>
            <h4>Audiable</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >Download</Link></li>
              <li><Link to="#" className='hover:text-blue-400' >Audia Books</Link></li>
            </ul>
          </div>

          <div>
            <h4>IMDb</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >Movies , Tvs & Celebraties</Link></li>
            </ul>
          </div>


          <div>
            <h4>ShopBop</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >Designer</Link></li>
              <li><Link to="#" className='hover:text-blue-400' >Fashion Brand</Link></li>
            </ul>
          </div>

          <div>
            <h4>Amazon Business</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >EveryThing For Your Business </Link></li>
            </ul>
          </div>

          <div>
            <h4>Prime Now</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >2-hour Delivery on Every Item</Link></li>
            </ul>
          </div>

          <div>
            <h4>Amazon Prime Music</h4>
            <ul>
              <li><Link to="#" className='hover:text-blue-400' >100 million songs , ad free <br></br> over 15 millions podcast episodes</Link></li>
            </ul>
          </div>

        </div>
      </div>
      <hr />
      <div className='container-fluid bg-slate-900 text-center flex justify-center items-center p-4 h-20 mb-0'>
        <h3>Conditions of Use & Sale
          Privacy Notice
          Interest-Based Ads
          &#169; 2023 - 2024 , BY Krushna & Pankaj </h3>
      </div>
    </footer>
  );
};

export default Footer;
