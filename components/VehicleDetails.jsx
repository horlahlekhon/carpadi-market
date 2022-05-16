import Link from 'next/link'
import React from 'react'
import { Form } from 'react-bootstrap'
import CarEdit from '../components/CarEdit'

const VehicleDetails = ({next}) => {
  return (
    <div className='vehicle_details_container'>
        <h1>Vehicle Details</h1>
        <h6>Give us more information about your vehicle</h6>
        <CarEdit />
        <div className='vehicleInfo_main' >

        <div className='vehicle_details_form_container'>
            <h2>Enter Your Vehicle Information</h2>
            <form className='vehicle_details_form'>
                <label htmlFor="car_usage">How long have you used the car</label>
                <Form.Select id="vehicle_details_select" name='car_usage'>
                <option></option>
                <option value="threemonths">3 months</option>
                <option value="sixmonths">6 months</option>
                <option value="ninemonths">9 months</option>
                <option value="oneyear">1 year</option>
                <option value="twoyears">2 years</option>
                <option value="threeyears">3 years</option>
                </Form.Select>
                <label htmlFor="mileage">Mileage</label>
                <input type="text" name="mileage" placeholder='Ex:15000' />
                <div className='form-btns'>
                    <Link href='/sell_car'>
                    <a className='back_btn'>Back</a>
                    </Link>
                    <button className='next_btn' onClick={next}>Next</button>
                </div>
            </form>
         </div>
         </div>
    </div>
  )
}

export default VehicleDetails