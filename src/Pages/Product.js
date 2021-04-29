import React from 'react';
import mango from '../images/mango.png'
import kiwi from '../images/kiwi.png'
import lichu from '../images/lichu.png'
import pineapple from '../images/pineapple.png'
import blackberry from '../images/blackberry.png'
import strawberry from '../images/strawberry.png'
import greenapple from '../images/greenapple.png'
import apple from '../images/apple.png'
import pomegrante from '../images/pomegrante.png'
import orange from '../images/orange.png'
import GreenGraps from '../images/GreenGraps.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
const Product = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="section-2">
                <div className="Pwrite">
                    <h2>All Time Classic</h2>
                    <p>All fruits are here .You can buy fresh food from us.Take fresh food make healthy</p>
                </div>
               <Link to='/Payment' style={{textDecoration:"none"}}> 
               <div className="icon">
                
                <img src={mango} alt=""/>
                   <h2 >MANGO</h2>
                
                </div>
                </Link>
                
                <Link to='/Payment' style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={kiwi} alt=""/ >
                
                   <h2>kiwi</h2>
                </div>
                </Link>
                <Link to="/Payment" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={lichu} alt=""/>
                   <h2>LICHU</h2>
                </div>
                </Link>
                <Link to="/Payment" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={pineapple} alt=""/>
                   <h2>PINE APPLE</h2>
                </div>
                </Link>
            </div>
            </div>
            <div>
            <div className="section-2">
                <div className="Pwrite">
                    <h2>Berry Special</h2>
                    <p>Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website!</p>
                </div>
               <Link to='/Payment' style={{textDecoration:"none"}}> 
               <div className="icon">
                
                <img src={blackberry} alt=""/>
                   <h2 >BLACK-BERRY</h2>
                
                </div>
                </Link>
                
                <Link to='/Payment' style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={kiwi} alt=""/>
                
                   <h2>kiwi</h2>
                </div>
                </Link>
                <Link to="/Payment" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={strawberry} alt=""/>
                   <h2>STRAW-BERRY</h2>
                </div>
                </Link>
                <Link to="/Payment" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={greenapple} alt=""/>
                   <h2>GREEN-APPLE</h2>
                </div>
                </Link>
            </div>
            </div>
            <div>
            <div className="section-2">
                <div className="Pwrite">
                    <h2>Fruit Blast</h2>
                    <p>All Wix templates are fully customizable and free to use. Just pick one you like</p>
                </div>
               <Link to='/Payment' style={{textDecoration:"none"}}> 
               <div className="icon">
                
                <img src={GreenGraps} alt=""/>
                   <h2 >GREENGRAPES</h2>
                
                </div>
                </Link>
                
                <Link to='/' style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={orange} alt=""/>
                
                   <h2>ORANGE</h2>
                </div>
                </Link>
                <Link to="/Payment" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={pomegrante} alt=""/>
                   <h2>POMEGTANTE</h2>
                </div>
                </Link>
                <Link to="/Payment" style={{textDecoration:"none"}}>
                <div className="icon">
                <img src={apple} alt=""/>
                   <h2> APPLE</h2>
                </div>
                </Link>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Product;    