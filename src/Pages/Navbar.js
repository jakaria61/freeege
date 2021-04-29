import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className='bg-success'>
            <div className='d-flex justify-content-center'>
            <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Home" style={{textDecoration:"none"}}><a className="nav-link active fs-2 me-5" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/Product" style={{textDecoration:"none"}}><a className="nav-link active fs-2 me-5" >Product</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/Post" style={{textDecoration:"none"}}><a className="nav-link active fs-2 me-5" >Post</a></Link>
        </li>
        <li className="nav-item">
         <Link to="/About" style={{textDecoration:"none"}}> <a className="nav-link active fs-2 me-5" >About</a></Link>
        </li>
        <li className="nav-item">
        <Link  to="/Contact" style={{textDecoration:"none"}}>  <a className="nav-link active fs-2 me-5" >Contact</a></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
 </div>
       
 </div>
        </div>
    );
};

export default Navbar;