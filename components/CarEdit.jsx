import React from 'react'
import Link from 'next/link'

const CarEdit = () => {
  return (
    <div className='carEdit-container'>
        <img src="https://res.cloudinary.com/grootretro/image/upload/v1652602158/carpadi-website/vehicle_info_placeholder_iolxhs.png" alt='car_info_placeholder' />
        <div className='car_info_flex'>
            <div>
            <h2>YOUR VEHICLE</h2>
            <h4>2003 Acura MDX</h4>
            <p>Trim: Base 4D SUV</p>
            </div>
            <Link href="/sell">
            <a className='edit-btn'>
                Edit
            </a>
            </Link>
        </div>
    </div>
  )
}

export default CarEdit