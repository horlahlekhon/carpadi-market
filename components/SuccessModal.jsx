import Link from 'next/link';
import React from 'react'
import GrClose from "react-icons/gr";

const SuccessModal = ({setModalDisplay}) => {
  return (
      <div className='modal_main'>
    <div className='successModal_container'>
        <div className='success_close' onClick={setModalDisplay}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="d-block d-lg-none" viewBox="0 0 16 16">
       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="d-none d-lg-block" viewBox="0 0 16 16">
       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
        </div>
        <h2>Successful</h2>
        <img src='https://res.cloudinary.com/grootretro/image/upload/v1652602158/carpadi-website/successful_msg_img_wuahbf.png' 
        alt='success-img' />
        <h5>Your request has been sent,
         we will surely get back to you as soon as possible</h5>
         <Link href='/'>
         <a className='backtohomepage_btn'>
         Back to Home page
         </a>
         </Link>
    </div>
    </div>
  )
}

export default SuccessModal