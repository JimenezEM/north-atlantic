import '../styles/Navbar.css';
import logo from '../assets/main-logo.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <Link to="/">
          <img src={logo} alt="Logo" className='logo' />
      </Link>

        <ul>
            {/*<li><Link to="/">Decode</Link></li>*/}
        </ul>

    </nav>
  )
}

export default Navbar