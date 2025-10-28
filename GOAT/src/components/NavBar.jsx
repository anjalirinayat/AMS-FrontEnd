import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png';

function NavBar () {
    return <nav className="navbar bg-black text-white py-2 md:py-4 lg:py-6 flex justify-between items-center">
        <div className="navbar-brand items-center w-40 h-40">
            <Link to="/" >
            <img 
            src={Logo}
            alt='Logo'
            className='logo-img'
            />
            </Link>
        </div>
      <div className="nav-links flex gap-5">
        <Link to="/Cart" className='nav-link'>Cart</Link>
        <Link to="/Product" className='nav-link'>Product</Link>
        <Link to="/AboutUs" className='nav-link'>AboutUs</Link>
      </div>
    </nav>
}

export default NavBar