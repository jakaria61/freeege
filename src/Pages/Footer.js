import React from 'react';
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'

const Footer = () => {
    return (
        <div>
             <div className="foot">
       <div className="media">
        <div>
        <a href="https://www.facebook.com/samim.jakaria.5/" target="_blank"><img src={facebook}></img></a>
        </div>
        <div>
        <a href="https://www.google.com/" target="_blank"><img src={google}></img></a>
        </div>
        <div>
        <a href="https://www.instagram.com/" target="_blank"><img src={instagram}></img></a>
        </div>
        <div>
        <a href="https://twitter.com/ " target="_blank"><img src={twitter}></img></a>
        </div><br/>
      
        </div>
       <p style={{textAlign: 'center'}}> © 2021 Freeeze. All Rights Reserved.</p>
       </div>

        </div>
    );
};

export default Footer;