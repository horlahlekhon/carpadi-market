import React from 'react'
import CarEdit from './CarEdit'


const WorthRange = ({prev,handleSubmit}) => {
  return (
    <div className='vehicle_details_container'>
    <h1>Vehicle Condition</h1>
    <h6>Give us more information about your vehicle</h6>
    <CarEdit />
    <div className='vehicleInfo_main'>
    <div className='worth_form_container'>
        <h2>Enter the amount you want to sell your car</h2>
        <form className='vehicle_form'>
            
        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" placeholder='Ex:500,000' />
        
        
        <div className='price'>
            <label htmlFor='price'>Would you like us to price your vehicle</label>
            <p>(Optional)</p>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="price" value="yes" checked /> 
              <span className='input-text'>Yes</span><br />
            </div>
            <div className='input-checked-div'>
              <input className='input-options' type="radio" name="price" value="no"/>
              <span className='input-text'>No</span><br />
            </div>

            </div>
            
            
            <div className='form-btns'>
    
                <a className='back_btn' onClick={prev}>Back</a>
                <button className='next_btn' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
     </div>
     </div>
</div>
  )
}

export default WorthRange