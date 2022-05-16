import React, { useEffect, useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import VehicleDetails from '../components/VehicleDetails'
import VehicleCondition from '../components/VehicleCondition'
import CustomerDetails from '../components/CustomerDetails'
import WorthRange from '../components/WorthRange'
import SuccessModal from '../components/SuccessModal'


const vehicle_info = () => {

  //states for changing page in multi 
    const [currentPage, setCurrentPage] = useState(0);
    const [modalDisplay, setModalDisplay] = useState(false)

    useEffect(() => {
        if(modalDisplay === true){
          document.body.style.overflow = 'hidden';
        }
    
        else if (modalDisplay === false){
          document.body.style.overflow = 'unset';
        }
      }, [modalDisplay])
    

    const sections = [
      { title: "Vehicle Details", onClick: () => setCurrentPage(1) },
      { title: 'Vehicle Condition', onClick: () => setCurrentPage(2) },
      { title: 'Customer Details', onClick: () => setCurrentPage(3) },
      { title: 'Worth Range', onClick: () => setCurrentPage(4) },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setModalDisplay(true)
    };
  
    const next = () => setCurrentPage((prev) => prev + 1);
    const prev = () => setCurrentPage((prev) => prev - 1);
  

  return (
    <div className='vehicleInfoContainer'>
        <div className='d-block d-lg-none'>
    <form onSubmit={handleSubmit}>
        <div style={{padding: ' 0 20px'}}>
      <Stepper
        size={18}
        steps={sections}
        activeStep={currentPage}
        activeColor="#243773"
        defaultBarColor="rgba(36, 55, 115, 0.5)"
        defaultTitleColor="#212120"
        defaultColor="#A3A3A3"
        defaultOpacity="1"
        completeColor="#243773"
        completeBarColor="#243773"
        activeTitleColor="#243773"
        circleFontSize={12}
        titleFontSize={12}
        completeTitleColor="#243773"
      />
      </div>
        {/* //this is for STEP ONE(vehicle details) */}
      {currentPage === 0 && (
          <>
            <VehicleDetails next={next}/>     
            </>
      )}

 {/* //this is for STEP TWO(vehicle condition) */}
      {currentPage === 1 && (
       <VehicleCondition prev={prev} next={next}/>
      )}

 {/* //this is for STEP THREE(customer details) */}
      {currentPage === 2 && (
        <CustomerDetails prev={prev} next={next}/>
      )}

      {currentPage === 3 && (
        <>
         <WorthRange prev={prev} handleSubmit={handleSubmit}/>
        
        </>
      )}
    </form>
    <div style={{display: `${modalDisplay === false ? 'none' : 'block'}`}}>
    <SuccessModal setModalDisplay={() => setModalDisplay(false)}/>
    </div>
    </div>

    <div className='d-none d-lg-block'>
    <form onSubmit={handleSubmit}>
        <div style={{padding: ' 0 50px'}}>
      <Stepper
        size={24}
        steps={sections}
        activeStep={currentPage}
        activeColor="#243773"
        defaultBarColor="rgba(36, 55, 115, 0.5)"
        defaultTitleColor="#212120"
        defaultColor="#A3A3A3"
        defaultOpacity="1"
        completeColor="#243773"
        completeBarColor="#243773"
        activeTitleColor="#243773"
        circleFontSize={14}
        titleFontSize={12}
        completeTitleColor="#243773"
      />
      </div>
        {/* //this is for STEP ONE(vehicle details) */}
      {currentPage === 0 && (
          <>
            <VehicleDetails next={next}/>     
            </>
      )}

 {/* //this is for STEP TWO(vehicle condition) */}
      {currentPage === 1 && (
       <VehicleCondition prev={prev} next={next}/>
      )}

 {/* //this is for STEP THREE(customer details) */}
      {currentPage === 2 && (
        <CustomerDetails prev={prev} next={next}/>
      )}

      {currentPage === 3 && (
        <>
         <WorthRange prev={prev} handleSubmit={handleSubmit}/>
        </>
      )}
    </form>
    <div style={{display: `${modalDisplay === false ? 'none' : 'block'}`}}>
    <SuccessModal setModalDisplay={() => setModalDisplay(false)}/>
    </div>
    </div>
    
  </div>
  )
}

export default vehicle_info

