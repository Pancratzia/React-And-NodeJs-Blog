import * as React from 'react';

import Logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {

  const links = [
    {
      name: 'ART',
      link: '/?cat=art'
    },
    {
      name: 'SCIENCE',
      link: '/?cat=science'
    },
    {
      name: 'TECHNOLOGY',
      link: '/?cat=technology'
    },
    {
      name: 'CINEMA',
      link: '/?cat=cinema'
    },
    {
      name: 'DESIGN',
      link: '/?cat=design'
    },
    {
      name: 'FOOD',
      link: '/?cat=food'
    }
  ]

    return (
      <div className="navbar">
        <div className="container">

          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="links">

            {links.map(link => (
              <Link className='link' key={link.name} to={link.link}>{link.name}</Link>
            ))}

            <span>Laura Ortega</span>
            <span>Logout</span>
            <span className="write">
              <Link className='link' to="/write">Write</Link>
            </span>

          </div>

        </div>
      </div>
    );
  }
  
  export default Navbar;