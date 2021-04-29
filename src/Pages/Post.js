import React from 'react';
import strawberry from '../images/strawberry.jpg'
import diet from '../images/diet.png'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Post = () => {
    return (
        <div>
          <Navbar></Navbar>
        <div id="pbody">
        <div className="d-flex flex-wrap justify-content-center me-5">
           <div className="part1 " >

             <img src={strawberry} alt=" "/><br/>
             <h1 style={{color:"red"}}>NEW CHILLS FOR SUMMER BY JAKARIA</h1><br/>
             <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website! Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and instantly publish to the web. Nothing to download, nothing to upload. All Wix templates are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like.

    </p>
    <Link to='/Post'><button type="button" class="btn btn-warning ">Read More</button></Link>
             </div>
           <div>
             <h2 style={{color:"red"}}>Recent Posts</h2>
             <img src={diet} alt=""/>
             <h2 style={{color:"red"}}>ON THE DIET</h2><br/>
             <p>This is just a place holder, so you can see what the site would look like.</p>
             <Link to='/Post'><button type="button" class="btn btn-warning ">Read More</button></Link>
           </div>
           
          </div> 
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Post;