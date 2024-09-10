// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div style={{
//         display: "flex",
//         justifyContent: "center",
//         gap: "20px",
//         margin: "30px"
//     }}>
//         <Link to="">Home</Link>
//         <Link to="about">About</Link>
//         <Link to="contact">Contact</Link>
//         <Link to="service">Services</Link>
//     </div>
//   )
// }

// export default Navbar




import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this CSS file includes the navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/service" className="nav-link">Services</Link>
    </nav>
  );
};

export default Navbar;
