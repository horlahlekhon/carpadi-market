import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ImageCarousel, { ImageType } from "../components/image-carousel";
import ItemName from '../components/ItemName'
import ItemsCarousel from 'react-items-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Nav from '../components/Nav';
import styled from 'styled-components';


const Div = styled.div`
header.navigation-wrapper.d-block.d-lg-blo:nth-child(2){
    display: none !important;
}

@media (min-width: 992px){
  header.navigation-wrapper.d-block.d-lg-blo:nth-child(2){
    display: block !important;
}
}
`

const car_info = () => {
    const [images, setImages] = useState<ImageType[]>();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const noOfItems = 7;
    const noOfCards = 2;
    const chevronWidth = 60;

    useEffect(() => {
      setImages(
        Array.from(Array(3).keys()).map((id) => ({
          id,
          url: `https://res.cloudinary.com/grootretro/image/upload/v1651700077/carpadi-website/carInfoview-big_trkuud.png`
        }))
      );
      function handleResize(){
      if (window.innerWidth > 992){
        setImages(
          Array.from(Array(5).keys()).map((id) => ({
            id,
            url: `https://res.cloudinary.com/grootretro/image/upload/v1651700077/carpadi-website/carInfoview-big_trkuud.png`
          }))
        );
      }  
      else{
        setImages(
          Array.from(Array(3).keys()).map((id) => ({
            id,
            url: `https://res.cloudinary.com/grootretro/image/upload/v1651700077/carpadi-website/carInfoview-big_trkuud.png`
          }))
        );
      }
        }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
      
      }, []);

  return (
    <Div>
    <div className="InfoMain">
     
      <Nav smSearchFormDisplay='block' searchFormDisplay="flex" buyLinkDisplay="none"/>
      <div className='d-block d-lg-none'>
      <Tabs
      id="controlled-tab-example"
      className="mb-3 info">
      <Tab eventKey="info" title="Vehicle Information">
      <ImageCarousel images={images} />

      <div className='carInfoDetail'>
        {/* add individual car name here */}
        <h2>Honda Arccord EX-L</h2>
        {/* add individual car price here */}
        <h4>N 3.5M</h4>
          {/* add individual car description here */}
        <p>Accident free | full customs duty paid | good history report ...</p>
        <a href='' className='message-btn'>Message</a>
        <a href='' className='call-btn'>Call Seller</a>
      </div>

   <div className='vehicleInfoDiv'>
       <h1>Vehicle Information</h1>
      <div className='ItemNameMain'>
        <ItemName />
        <ItemName />
        <ItemName />
        <ItemName />
        <ItemName />
        <ItemName />
      </div>
      </div>

      <div className='carBasicEngineInfoMain'>
          <div className='carBasicEngineInfoDiv'>
          <h2>Basic Information</h2>
          <ul>
              <li>
                  <h6>Model Number</h6>
                  {/* add the individual car model number below */}
                  <p>Benz E350 Sedan 2022 </p>
              </li>
              <li>
                  <h6>Made In:</h6>
                  {/* add where the individual car is 'Made In': below */}
                  <p>America</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Engine</h2>
          <ul>
              <li>
                  <h6>Engine type</h6>
                  {/* add the individual car engine type below */}
                  <p>2.0L Turbo Inline-4 Gas  </p>
              </li>
              <li>
                  <h6>Engine Power</h6>
                  {/* add the individual car engine power below */}
                  <p>255 hp @ 5800 rpm</p>
              </li>
              <li>
                  <h6>Torque</h6>
                  {/* add the individual car torque below */}
                  <p>273 lb-ft @ 1800 rpm</p>
              </li>
              <li>
                  <h6>No. of cylinders</h6>
                  {/* add the no of cylinders individual car has, below */}
                  <p>4</p>
              </li>
              <li>
                  <h6>Fuel Type</h6>
                  {/* add the fuel type individual car has, below */}
                  <p>Premium unleaded gasoline</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Useful information</h2>
          <ul>
              <li>
                  <h6>Vehicle registration</h6>
                  {/* add the individual car registration number below */}
                  <p>MA68EAG</p>
              </li>
              <li>
                  <h6>Previous owners</h6>
                  {/* add the individual car previous owners below */}
                  <p>2</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Mechanical</h2>
          <ul>
              <li>
                  <h6>Transmission</h6>
                  {/* add the individual car transmission below */}
                  <p>Manual</p>
              </li>
              <li>
                  <h6>Mileage</h6>
                  {/* add the individual car mileage below */}
                  <p>15,372</p>
              </li>
              <li>
                  <h6>Drive type</h6>
                  {/* add the individual car drive type below */}
                  <p>Front-wheel drive</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Service history</h2>
          <ul>
              <li>
                  <h6>Last service</h6>
                  {/* add the individual car 'Last Service' below */}
                  <p>24/02/2022</p>
              </li>
              <li>
                  <h6>Mileage at last service</h6>
                  {/* add the individual car 'Mileage at last service' below */}
                  <p>15,062</p>
              </li>
          </ul>
          </div>
      </div>
      <div className='keyFeaturesDiv'>
            <h2>Key Features Include</h2>
            <ItemsCarousel
              infiniteLoop
              gutter={12}
              activePosition={'center'}
              alwaysShowChevrons={false}
              numberOfCards={3}
              slidesToScroll={2}
              outsideChevron={false}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              rightChevron={
                <button className="carousel-features-right-btn">
                    <IoIosArrowForward className="r-arr"/>
                  </button>
              }
              leftChevron={
                <button className="carousel-features-left-btn">
                    <IoIosArrowBack className="l-arr"/>
                  </button>
              }
            >
              {/* add individual car features here */}
              {Array.from(new Array(10)).map((_, i) =>
                <div
                  key={i}
                  className="itemName-div2"
                >
                  <img src='https://res.cloudinary.com/grootretro/image/upload/v1651700077/carpadi-website/carInfoview-big_trkuud.png' />
                  </div>
              )}
            </ItemsCarousel>
          </div>
      </Tab>
      <Tab eventKey="inspect" title="Vehicle Inspection">
        <div className='vehicle-inspection'>
        Don't know what is going into this Tab
        </div>
      </Tab>
    </Tabs>  
    </div>

    {/* Note: ``The Div "carinfoDetail" and it is children(for large screen) will be in
    "The Component ImageCarousel"(components/image-carousel/index) because in the Large screen,
    i had to flex the divs and i can only do that if the Div "carinfoDetail" is 
    inside the "ImageCarousel" Component.

    If u want Add the Api Data for 'carInfoDetail' Div for Large Screen, u can do
    that in the "ImageCarousel Component"

    Note: Only for Large screen, the small and medium screen
    Api data can be added in this file.
    `` */}

    <div className='d-none d-lg-block'>
    <Tabs
      id="controlled-tab-example"
      className="mb-3 info">
      <Tab eventKey="info" title="Vehicle Information">
      <ImageCarousel images={images} />

      
     {/* carInfoDetail will be found in 
     components/image-carousel/index.tsx */}

   <div className='vehicleInfoDiv'>
       <h1>Vehicle Information</h1>
      <div className='ItemNameMain'>
        <ItemName />
        <ItemName />
        <ItemName />
        <ItemName />
        <ItemName />
        <ItemName />
      </div>
      </div>

      <div className='carBasicEngineInfoMain'>
          <div className='carBasicEngineInfoDiv'>
          <h2>Basic Information</h2>
          <ul>
              <li>
                  <h6>Model Number</h6>
                  {/* add the individual car model number below */}
                  <p>Benz E350 Sedan 2022 </p>
              </li>
              <li>
                  <h6>Made In:</h6>
                  {/* add where the individual car is 'Made In': below */}
                  <p>America</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Engine</h2>
          <ul>
              <li>
                  <h6>Engine type</h6>
                  {/* add the individual car engine type below */}
                  <p>2.0L Turbo Inline-4 Gas  </p>
              </li>
              <li>
                  <h6>Engine Power</h6>
                  {/* add the individual car engine power below */}
                  <p>255 hp @ 5800 rpm</p>
              </li>
              <li>
                  <h6>Torque</h6>
                  {/* add the individual car torque below */}
                  <p>273 lb-ft @ 1800 rpm</p>
              </li>
              <li>
                  <h6>No. of cylinders</h6>
                  {/* add the no of cylinders individual car has, below */}
                  <p>4</p>
              </li>
              <li>
                  <h6>Fuel Type</h6>
                  {/* add the fuel type individual car has, below */}
                  <p>Premium unleaded gasoline</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Useful information</h2>
          <ul>
              <li>
                  <h6>Vehicle registration</h6>
                  {/* add the individual car registration number below */}
                  <p>MA68EAG</p>
              </li>
              <li>
                  <h6>Previous owners</h6>
                  {/* add the individual car previous owners below */}
                  <p>2</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Mechanical</h2>
          <ul>
              <li>
                  <h6>Transmission</h6>
                  {/* add the individual car transmission below */}
                  <p>Manual</p>
              </li>
              <li>
                  <h6>Mileage</h6>
                  {/* add the individual car mileage below */}
                  <p>15,372</p>
              </li>
              <li>
                  <h6>Drive type</h6>
                  {/* add the individual car drive type below */}
                  <p>Front-wheel drive</p>
              </li>
          </ul>
          </div>
          <div className='carBasicEngineInfoDiv'>
          <h2>Service history</h2>
          <ul>
              <li>
                  <h6>Last service</h6>
                  {/* add the individual car 'Last Service' below */}
                  <p>24/02/2022</p>
              </li>
              <li>
                  <h6>Mileage at last service</h6>
                  {/* add the individual car 'Mileage at last service' below */}
                  <p>15,062</p>
              </li>
          </ul>
          </div>
      </div>
      <div className='keyFeaturesDiv d-lg-block d-xl-none'>
            <h2>Key Features Include</h2>
            <ItemsCarousel
              infiniteLoop
              gutter={12}
              activePosition={'center'}
              alwaysShowChevrons={false}
              numberOfCards={3}
              slidesToScroll={2}
              outsideChevron={false}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              rightChevron={
                <button className="carousel-features-right-btn">
                    <IoIosArrowForward className="r-arr"/>
                  </button>
              }
              leftChevron={
                <button className="carousel-features-left-btn">
                    <IoIosArrowBack className="l-arr"/>
                  </button>
              }
            >
              {/* add individual car features here */}
              {Array.from(new Array(10)).map((_, i) =>
                <div
                  key={i}
                  className="itemName-div2"
                >
                  <img src='https://res.cloudinary.com/grootretro/image/upload/v1651700077/carpadi-website/carInfoview-big_trkuud.png' />
                 {/* add the car features item name here */}
                  <p className='itemNameText'>Item name</p>
                  </div>
              )}
            </ItemsCarousel>
          </div>

          <div className='keyFeaturesDiv d-lg-none d-xl-block'>
            <h2>Key Features Include</h2>
            <ItemsCarousel
              infiniteLoop
              gutter={12}
              activePosition={'center'}
              alwaysShowChevrons={false}
              numberOfCards={4}
              slidesToScroll={2}
              outsideChevron={false}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              rightChevron={
                <button className="carousel-features-right-btn">
                    <IoIosArrowForward className="r-arr"/>
                  </button>
              }
              leftChevron={
                <button className="carousel-features-left-btn">
                    <IoIosArrowBack className="l-arr"/>
                  </button>
              }
            >
              {/* add individual car features here */}
              {Array.from(new Array(10)).map((_, i) =>
                <div
                  key={i}
                  className="itemName-div2"
                >
                  <img src='https://res.cloudinary.com/grootretro/image/upload/v1651700077/carpadi-website/carInfoview-big_trkuud.png' />
                 {/* add the car features item name here */}
                  <p className='itemNameText'>Item name</p>
                  </div>
              )}
            </ItemsCarousel>
          </div>

      </Tab>
      <Tab eventKey="inspect" title="Vehicle Inspection">
      <div className='vehicle-inspection'>
        Don't know what is going into this Tab
        </div>
      </Tab>
    </Tabs>  
    </div>
    </div>
    </Div>
  )
}

export default car_info