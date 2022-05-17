import React from 'react'
import CarEdit from '../components/CarEdit'

const VehicleCondition = ({prev, next}) => {
  return (
    <div className='vehicle_details_container'>
    <h1>Vehicle Condition</h1>
    <h6>Give us more information about your vehicle</h6>
    <CarEdit />
    <div className='vehicleInfo_main'>
    <div className='vehicle_form_container'>
        <h2>Enter Your Vehicle Condition Information</h2>
        <form className='vehicle_form'>
            
           <div className='user'> 
            <label htmlFor='previousUserOfCar'>How many users have used the car before?</label>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="user" value="one_user" checked /> 
              <span className='input-text'>1 user</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="user" value="two_users"/>
              <span className='input-text'>2 users</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="user" value="three_users"/>
              <span className='input-text'>3 users</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="user" value="four_users"/>
              <span className='input-text'>4 users</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="user" value="fiveormore_users"/>
              <span className='input-text'>5 or more</span><br />
            </div>
            </div>

            <div className='custom'>
            <label htmlFor='customAvailablity'>Is your custom available?</label>
            <p>(If bought brand new, do you have the attertction paper)</p>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="custom" value="yes" checked /> 
              <span className='input-text'>Yes</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="custom" value="no"/>
              <span className='input-text'>No</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="custom" value="others"/>
              <span className='input-text'>Others</span><br />
            </div>

            </div>
            
            <div className='condition'>
            <label htmlFor='condition'>What is your car condition?</label>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="condition" value="great" checked /> 
              <span className='input-text'>Great</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="condition" value="good"/>
              <span className='input-text'>Good</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="condition" value="fair"/>
              <span className='input-text'>Fair</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="condition" value="poor"/>
              <span className='input-text'>Poor</span><br />
            </div>


            </div>
            
            <div className='form-btns'>
    
                <a className='back_btn' onClick={prev}>Back</a>
                <button className='next_btn' onClick={next}>Almost Done</button>
            </div>
        </form>
     </div>
     </div>
</div>
  )
}

export default VehicleCondition