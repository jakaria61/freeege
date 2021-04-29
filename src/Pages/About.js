import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
    return (
       <div>
           <Navbar></Navbar>
            <div className="abody">
            <div className="contain">
                <h1 style={{color:"red"}}>BE PART OF OUR COMMUNITY</h1>
                <h4>If you’re experiencing</h4>
                <h4>issues or having concerns</h4>
                <h4>about this website</h4>
                <h4>template, join the</h4>
                <h4>discussion on our forum</h4>
                <h4>and meet other people in</h4>
                <h4>the community who share</h4>
                <h4>the same interests.</h4>
            </div>
                <div className="contain">
                        <h1 style={{color:"red"}}>WE HAVE FREE TEMPLATES FOR EVERYONE</h1>
                        <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them.</p>
                        <h1 style={{color:"red"}}>WE HAVE MORE TEMPLATES FOR YOU</h1>
                        <p>Looking for more templates? Just browse through all our Free Website Templates. But if you can’t find any website templates you can use, </p>
                        <h1 style={{color:"red"}}>TEMPLATE DETAILS</h1>
                        <p>Design Version 2.
                        Code Version 1.
                          Website Template details, discussion and updates for this Frozen Yogurt Shop Website Template.

                         Website Template design by Free Website Templates.</p>
                </div>
            
        </div>
        <Footer></Footer>
       </div>
    );
};

export default About;