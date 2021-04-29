import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const handelClick=()=>{
   alert("Thanks for send");
}

const Contact = () => {
    
    return (
        <div>
          <Navbar></Navbar>
            <div className="chead">
                <h1 style={{color:"red"}}>Contact</h1>
            </div>
            <div className="contact">
         <div className="fromInfo">
         <h1 style={{color:"red"}}>INQUIRY FORM</h1>
           <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1 " className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Share Your Thought</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        <button onClick={handelClick} type="button" className="btn btn-warning">SEND</button>
         </div>
      
  <div className="written">
   <h1 style={{color:"red"}}> WE’D LOVE TO HEAR FROM YOU. </h1>
   <p> If you're having problems editing this website template, then don't hesitate to ask for help on the Forums. </p>
  </div>
  
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;