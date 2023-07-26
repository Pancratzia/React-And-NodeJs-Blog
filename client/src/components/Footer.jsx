import * as React from 'react';
import Logo from '../img/logo.png';

function Footer() {
    return (
      <footer className='footer'>
        <img src={Logo} alt="logo" />

        <span>Made with ❤️ and React.js by Laura Ortega </span>
      </footer>
    );
  }
  
  export default Footer;