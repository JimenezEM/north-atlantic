import '../styles/Navbar.css';
import logo from '../assets/wheel-icon.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <Link to="/">
        <h1>VIN Decoder</h1>
      </Link>

        <ul>
            {/*<li><Link to="/">Decode</Link></li>*/}
        </ul>

    </nav>
  )
}

export default Navbar