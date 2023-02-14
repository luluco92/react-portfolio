import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';

// Create a styles object called "styles"
const styles = {
  h1: {
     fontSize: '3rem',
     color: 'white'
  }
}

// deconstructing object: the currentPage state var and the handlepagechange function which changes currentPage

function NavTabs({ currentPage, handlePageChange }) {
  return (
<header className="header">
      <h1 style={styles.h1}>Joe Student</h1>
       <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  cliking nav tabs functionality. the clicked one will gain the 'nav-link-active' class for css. this code is repeated for all four tabs

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
       </nav>
    </header>  
  );
}

export default NavTabs;
