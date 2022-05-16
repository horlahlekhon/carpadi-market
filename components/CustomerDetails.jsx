import React from 'react'
import CarEdit from './CarEdit'

const CustomerDetails = ({prev, next}) => {
  return (
    <div className='vehicle_details_container'>
    <h1>Vehicle Condition</h1>
    <h6>Give us more information about your vehicle</h6>
    <CarEdit />
    <div className='vehicleInfo_main'>
    <div className='vehicle_form_container'>
        <h2>Enter Your Information</h2>
        <form className='vehicle_form'>
            
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" placeholder='Ex: John' />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" placeholder='Ex: Smith' />

        <label htmlFor="phonenumber">Phone Number</label>
        <input type="text" name="phonenumber" placeholder='Ex:(234)-0123-456-789' />
       
       
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" placeholder='Ex: johnsmith@gmail.com' />
        
        <label htmlFor="state">State</label>
        <input type="text" name="state" placeholder='Ex:Lagos' />
        
        <label htmlFor="address">Address</label>
        <input type="text" name="address" placeholder='Ex: 1, One Street, Shomolu.' />
        
        
        
        
        <div className='getintouch'>
            <label htmlFor='getintouch'>How is the best way to get in touch with you?</label>
            <p>(Optional)</p>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="getintouch" value="emailaddress" checked /> 
              <span className='input-text'>Email Address</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="getintouch" value="phonenumber"/>
              <span className='input-text'>Phone Number</span><br />
            </div>

            </div>
            
            
            <div className='form-btns'>
    
                <a className='back_btn' onClick={prev}>Back</a>
                <button className='next_btn' onClick={next}>Almost There</button>
            </div>
        </form>
     </div>
     </div>
</div>
  )
}

export default CustomerDetails