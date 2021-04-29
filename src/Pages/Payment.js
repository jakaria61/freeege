import React from 'react';
import Navbar from './Navbar';


const handeler=()=>{
    alert("Thanks For purchase");
}

const Payment = () => {
    return (
        <div className="pay">
            <Navbar></Navbar>
            <div className="w-50 text-align-center">
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="Phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Date</label>
  <input type="" className="form-control" id="exampleFormControlInput1" placeholder="date"/>
</div>
<select class="form-select" aria-label="Disabled select example" >
  <option selected>Select Payment Method</option>
  <option value="1">Bkash</option>
  <option value="2">Rocket</option>
  <option value="3">Nogod</option>
</select>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Price</label>
  <input type="price" className="form-control" id="exampleFormControlInput1" placeholder="$"/>
</div>
<button onClick={handeler} type="button" class="btn btn-warning">Pay-Now</button>
        </div>
        </div>
    );
};

export default Payment;