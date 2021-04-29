import React from 'react';
import frut from '../images/frut.jpg'
import orange from '../images/orange.jpg'
import product from '../images/product.png'
import handshak from '../images/handshake.png'
import cone from '../images/cone.png'
import pin from '../images/pin.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className="header">
            <img src={frut} alt=""/>
         </div>

         <div className="section-1">
             <div className="sub-1">
                 <h1 style={{color: "brown"}}>NEW PRODUCT</h1><br/>
                 <h1 style={{color: "red"}}>The Twist of Healthy Yogurt</h1><br/>
                 <p>This website template has been designed by
for you, for free. You can replace all this text with your own text.</p>
           </div>
                  <div>
                      <img src={orange} alt=""/>
                  </div>
         </div>

            <div className="section-2">
               <Link to='/Product' style={{textDecoration:"none"}}> 
               <div className="icon">
                
                <img src={product} alt=""/>
                   <h2 >PRODUCTS</h2>
                
                </div>
                </Link>
                
                <Link to='/Post' style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={handshak} alt=""/>
                
                   <h2>OUR STORY</h2>
                </div>
                </Link>
                <Link to="/Contact" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={pin} alt=""/>
                   <h2>FLAVORS</h2>
                </div>
                </Link>
                <Link to="/About" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={cone} alt=""/>
                   <h2>OUR LOCATION</h2>
                </div>
                </Link>
            </div>
      <Footer></Footer>

 </div>
    );
};

export default Home;