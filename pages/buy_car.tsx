// @ts-nocheck
import { useState } from 'react'
import { Col, Container, Nav as Navigation, Row, Tab } from 'react-bootstrap'
import { GrFormClose } from 'react-icons/gr'
import ViewCar from '../components/ViewCar'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Nav from '../components/Nav';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

const BuyCar = () => {

  const [recommendedDisplay, setRecommendedDisplay] = useState(true)
  const [seeMore, setSeeMore] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false
  })
  

  return (
   
   <Div>
   <Nav smSearchFormDisplay='block' searchFormDisplay="flex" buyLinkDisplay="none"/>
    <div className='buycarMain d-block d-lg-none'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Navigation variant="pills" style={{
         display: 'flex',
         flexWrap: 'nowrap',
         overflowX: 'auto',
      }}>
        <Navigation.Item style={{display: `${recommendedDisplay ? 'block' : 'none'}`}}>
          <Navigation.Link eventKey="first" >
            <div className='close-recommend-button' onClick={() => setRecommendedDisplay(false)}>
            <GrFormClose style={{fontSize: '16px', color: '#767676'}}/>
            </div>
            <img style={{width: '16px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/car_placeholder.png' alt="car_placeholder"/>
            Recommended
            </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="second">
            <img style={{width: '24px', height: '22px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Lexus_drgxhx.png' alt='lexus_logo' />
           Lexus
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="third">
            <img  src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Toyota_qfm1wt.png' alt="toyota_logo"/>
            Toyota
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="fourth">
          <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Mercedes_Benz_tegkjz.png' alt="benz_logo"/>
            Benz
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="fifth">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Acura_pw01yn.png' alt='acura_logo' />
            Acura
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="sixth">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Honda_b2yas6.png' alt='honda_logo'/>
            Honda
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="seventh">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Hyundai_nhnrbq.png' alt='hyundai_logo'/>
            Ford
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="eighth">
            <img style={{width: '24px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Peugeot_ssqbxp.png' alt='peugeot_logo' />
            Peugeot
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="ninth">
            <img style={{width: '24px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Land_Rover_ucj52i.png' alt='landRover_logo'/>
            Land Rover
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="tenth">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Mazda_wl2eyt.png' alt='mazda_logo' />
            Mazda
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="eleventh">
            <br />
            See More
          </Navigation.Link>
        </Navigation.Item>
    
      </Navigation>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         
         <div className='viewCarGrid'>
           {/* this is for the recommendation tab- map out recommendation car here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Recommeded cars
           map out recommended cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className='viewCarGrid'>
           {/* this is for the lexus tab -->
            map out cars with lexus brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Lexus cars
           map out Lexus cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        
        <Tab.Pane eventKey="third">
        <div className='viewCarGrid'>
            {/* this is for the Toyota tab -->
            map out cars with Toyota brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Toyota cars
           map out Toyota cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <div className='viewCarGrid'>
          {/* this is for the Benz tab -->
            map out cars with Benz brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Benz cars
           map out Benz cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
        <div className='viewCarGrid'>
           {/* this is for the Acura tab -->
            map out cars with Acura brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Acura cars
           map out Acura cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="sixth">
        <div className='viewCarGrid'>
           {/* this is for the Honda tab -->
            map out cars with Honda brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Honda cars
           map out Honda cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="seventh">
        <div className='viewCarGrid'>
           {/* this is for the Ford tab -->
            map out cars with Ford brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Ford cars
           map out Ford cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="eighth">
        <div className='viewCarGrid'>
           {/* this is for the Peugeot tab -->
            map out cars with Peugeot brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Peugeot cars
           map out Peugeot car here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="ninth">
        <div className='viewCarGrid'>
           {/* this is for the Land Rover tab -->
            map out cars with LandRover brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only LandRover cars
           map out LandRover car here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="tenth">
        <div className='viewCarGrid'>
           {/* this is for the Mazda tab -->
            map out cars with Mazda brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Mazda cars
           map out Mazda cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="eleventh">
        <div className='viewCarGrid'>
           {/* this is for the SeeMore tab -->
            map out cars with Random Brands or More Brands here 
            e.g like car brands that don't have their own tabs 
            */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for More CarBrands 
           map out different or More Car Brands here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        

      </Tab.Content>
</Tab.Container>
    </div>

  <div className='buycarMain d-none d-lg-block'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Navigation variant="pills" style={{
         display: 'flex',
         flexWrap: 'nowrap',
         overflowX: 'auto',
      }}>
        <Navigation.Item style={{display: `${recommendedDisplay ? 'block' : 'none'}`}}>
          <Navigation.Link eventKey="first" >
            <div className='close-recommend-button' onClick={() => setRecommendedDisplay(false)}>
            <GrFormClose style={{fontSize: '16px', color: '#767676'}}/>
            </div>
            <img style={{width: '16px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/car_placeholder.png' alt="car_placeholder"/>
            Recommended
            </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="second">
            <img style={{width: '24px', height: '22px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Lexus_drgxhx.png' alt='lexus_logo' />
           Lexus
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="third">
            <img  src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Toyota_qfm1wt.png' alt="toyota_logo"/>
            Toyota
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="fourth">
          <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Mercedes_Benz_tegkjz.png' alt="benz_logo"/>
            Benz
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="fifth">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Acura_pw01yn.png' alt='acura_logo' />
            Acura
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="sixth">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Honda_b2yas6.png' alt='honda_logo'/>
            Honda
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="seventh">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Hyundai_nhnrbq.png' alt='hyundai_logo'/>
            Ford
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="eighth">
            <img style={{width: '24px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320290/carpadi-website/Peugeot_ssqbxp.png' alt='peugeot_logo' />
            Peugeot
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="ninth">
            <img style={{width: '24px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Land_Rover_ucj52i.png' alt='landRover_logo'/>
            Land Rover
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="tenth">
            <img src='https://res.cloudinary.com/grootretro/image/upload/v1651320289/carpadi-website/Mazda_wl2eyt.png' alt='mazda_logo' />
            Mazda
          </Navigation.Link>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Link eventKey="eleventh">
            <br />
            See More
          </Navigation.Link>
        </Navigation.Item>
    
      </Navigation>
  <div style={{padding: '40px 40px 0'}}>
  <Row>
  <Col lg="3">
    <Tab.Container defaultActiveKey="first">
    
    <Navigation variant="pills" className='car-options'>
      <Navigation.Item>
        <Navigation.Link eventKey="first">New Cars</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link eventKey="second">Used Cars</Navigation.Link>
      </Navigation.Item>
    </Navigation>

    <Tab.Content style={{width: '100%'}}>
      <Tab.Pane eventKey="first">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brands & Models</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* this is the radio input for car brands
            change if necessary */}
            <div>
            <h4 className='brand-title'>Brands</h4>
              <input className='input-options' type="radio" name="brand" value="lexus" /> 
              <span className='input-text'>Lexus</span><br />
              <input className='input-options' type="radio" name="brand" value="toyota"/>
              <span className='input-text'>Toyota</span><br />
              <input className='input-options' type="radio" name="brand" value="benz" /> 
              <span className='input-text'>Benz</span><br />
              <input className='input-options' type="radio" name="brand" value="acura" />
              <span className='input-text'>Acura</span> <br />
              <input className='input-options' type="radio" name="brand" value="honda" />
              <span className='input-text'>Honda</span> <br />
              <input className='input-options' type="radio" name="brand" value="ford" /> 
              <span className='input-text'>Ford</span><br />
              <input className='input-options' type="radio" name="brand" value="peugeot" /> 
              <span className='input-text'>Peugeot</span><br />
              <input className='input-options' type="radio" name="brand" value="landrover" /> 
              <span className='input-text'>Land Rover</span><br />
              <input className='input-options' type="radio" name="brand" value="mazda" /> 
              <span className='input-text'>Mazda</span><br />
            {/* this is the radio input for car models
            change if necessary */}
            <h4 className='model-title'>Models</h4>
              <input className='input-options' type="radio" name="model" value="hatchback" /> 
              <span className='input-text'>Hatchback</span><br />
              <input className='input-options' type="radio" name="model" value="sedan"/> 
              <span className='input-text'>Sedan </span><br />
              <input className='input-options' type="radio" name="model" value="suv" /> 
              <span className='input-text'>SUV </span><br />
              <input className='input-options' type="radio" name="model" value="muv" /> 
              <span className='input-text'>MUV</span><br />
              <input className='input-options' type="radio" name="model" value="crossover" /> 
              <span className='input-text'>Crossover</span><br />
              <input className='input-options' type="radio" name="model" value="coupe" /> 
              <span className='input-text'>Coupe </span><br />
              <input className='input-options' type="radio" name="model" value="peugeot" /> 
              <span className='input-text'>Convertible </span><br />
            </div>
     
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Year</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <input className='input-options' type="radio" name="year" value="2022" /> 
              <span className='input-text'>2022</span><br />
              <input className='input-options' type="radio" name="year" value="2021"/>
              <span className='input-text'>2021</span><br />
              <input className='input-options' type="radio" name="year" value="2020" /> 
              <span className='input-text'>2020</span><br />
              <input className='input-options' type="radio" name="year" value="2019" />
              <span className='input-text'>2019</span> <br />
              <p className='seemore-button' onClick={() => setSeeMore({ first: !seeMore.first })}>See More</p>
              <div style={{display: `${seeMore.first === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="year" value="2018" />
              <span className='input-text'>2018</span> <br />
              <input className='input-options' type="radio" name="year" value="2017" />
              <span className='input-text'>2017</span> <br />
              <input className='input-options' type="radio" name="year" value="2016" />
              <span className='input-text'>2016</span> <br />
              <input className='input-options' type="radio" name="year" value="2015" />
              <span className='input-text'>2015</span> <br />
              <input className='input-options' type="radio" name="year" value="2014" />
              <span className='input-text'>2014</span> <br />
              <input className='input-options' type="radio" name="year" value="2013" />
              <span className='input-text'>2013</span> <br />
              <input className='input-options' type="radio" name="year" value="2012" />
              <span className='input-text'>2012</span> <br />
              <input className='input-options' type="radio" name="year" value="2011" />
              <span className='input-text'>2011</span> <br />
              <input className='input-options' type="radio" name="year" value="2010" />
              <span className='input-text'>2010</span> <br />
              </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Transmission</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <input className='input-options' type="radio" name="transmission" value="automatic" /> 
              <span className='input-text'>Automatic</span><br />
              <input className='input-options' type="radio" name="transmission" value="manual"/>
              <span className='input-text'>Manual</span><br />
              <p className='seemore-button' onClick={() => setSeeMore({second: !seeMore.second})}>See More</p>
              <div style={{display: `${seeMore.second === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="transmission" value="continuously variable" />
              <span className='input-text'>Continuously Variable</span> <br />
              <input className='input-options' type="radio" name="transmission" value="semi-automatic" />
              <span className='input-text'>Semi-Automatic</span> <br />
              <input className='input-options' type="radio" name="transmission" value="dual-clutch" />
              <span className='input-text'>Dual-Clutch</span> <br />
              </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Body Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <input className='input-options' type="radio" name="body-type" value="hatchback" /> 
              <span className='input-text'>Hatchback</span><br />
              <input className='input-options' type="radio" name="body-type" value="minivan"/>
              <span className='input-text'>Minivan</span><br />
              <input className='input-options' type="radio" name="body-type" value="cuv"/>
              <span className='input-text'>CUV</span><br />
              <input className='input-options' type="radio" name="body-type" value="coupe"/>
              <span className='input-text'>Coupe</span><br />
              <p className='seemore-button' onClick={() => setSeeMore({third: !seeMore.third})}>See More</p>
              <div style={{display: `${seeMore.third === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="body-type" value="supercar" />
              <span className='input-text'>Supercar</span> <br />
              <input className='input-options' type="radio" name="body-type" value="kammback" />
              <span className='input-text'>Kammback</span> <br />
              <input className='input-options' type="radio" name="body-type" value="convertible" />
              <span className='input-text'>Convertible</span> <br />
              <input className='input-options' type="radio" name="body-type" value="sedan" />
              <span className='input-text'>Sedan</span> <br />
              <input className='input-options' type="radio" name="body-type" value="campervan" />
              <span className='input-text'>Campervan</span> <br />
              <input className='input-options' type="radio" name="body-type" value="micro" />
              <span className='input-text'>Micro</span> <br />
              <input className='input-options' type="radio" name="body-type" value="suv" />
              <span className='input-text'>Suv</span> <br />
              <input className='input-options' type="radio" name="body-type" value="roadster" />
              <span className='input-text'>Roadster</span> <br />
              </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <input className='input-options' type="radio" name="price" value="4.5-million-naira"/>
              <span className='input-text'>N 4.5M</span><br />
              <input className='input-options' type="radio" name="price" value="2-million-naira"/>
              <span className='input-text'>N 2M</span><br />
              <input className='input-options' type="radio" name="price" value="1.5-million-naira"/>
              <span className='input-text'>N 1.5M</span><br />
              <input className='input-options' type="radio" name="price" value="1-million-naira"/>
              <span className='input-text'>N 1M</span><br />
              <p className='seemore-button' onClick={() => setSeeMore({fourth: !seeMore.fourth})}>See More</p>
              <div style={{display: `${seeMore.fourth === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="price" value="5-million-naira" />
              <span className='input-text'>N 5M</span> <br />
              <input className='input-options' type="radio" name="price" value="5.5-million-naira" />
              <span className='input-text'>N 5.5M</span> <br />
              <input className='input-options' type="radio" name="price" value="6-million-naira" />
              <span className='input-text'>N 6M</span> <br />
              <input className='input-options' type="radio" name="price" value="7-million-naira" />
              <span className='input-text'>N 7M</span> <br />
              <input className='input-options' type="radio" name="price" value="10-million-naira" />
              <span className='input-text'>N 10M</span> <br />
              </div>
        </AccordionDetails>
      </Accordion>

      </Tab.Pane>
      <Tab.Pane eventKey="second">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brands & Models</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* this is the radio input for car brands
            change if necessary */}
            <div>
            <h4 className='brand-title'>Brands</h4>
              <input className='input-options' type="radio" name="brand" value="lexus" /> 
              <span className='input-text'>Lexus</span><br />
              <input className='input-options' type="radio" name="brand" value="toyota"/>
              <span className='input-text'>Toyota</span><br />
              <input className='input-options' type="radio" name="brand" value="benz" /> 
              <span className='input-text'>Benz</span><br />
              <input className='input-options' type="radio" name="brand" value="acura" />
              <span className='input-text'>Acura</span> <br />
              <input className='input-options' type="radio" name="brand" value="honda" />
              <span className='input-text'>Honda</span> <br />
              <input className='input-options' type="radio" name="brand" value="ford" /> 
              <span className='input-text'>Ford</span><br />
              <input className='input-options' type="radio" name="brand" value="peugeot" /> 
              <span className='input-text'>Peugeot</span><br />
              <input className='input-options' type="radio" name="brand" value="landrover" /> 
              <span className='input-text'>Land Rover</span><br />
              <input className='input-options' type="radio" name="brand" value="mazda" /> 
              <span className='input-text'>Mazda</span><br />
            {/* this is the radio input for car models
            change if necessary */}
            <h4 className='model-title'>Models</h4>
              <input className='input-options' type="radio" name="model" value="hatchback" /> 
              <span className='input-text'>Hatchback</span><br />
              <input className='input-options' type="radio" name="model" value="sedan"/> 
              <span className='input-text'>Sedan </span><br />
              <input className='input-options' type="radio" name="model" value="suv" /> 
              <span className='input-text'>SUV </span><br />
              <input className='input-options' type="radio" name="model" value="muv" /> 
              <span className='input-text'>MUV</span><br />
              <input className='input-options' type="radio" name="model" value="crossover" /> 
              <span className='input-text'>Crossover</span><br />
              <input className='input-options' type="radio" name="model" value="coupe" /> 
              <span className='input-text'>Coupe </span><br />
              <input className='input-options' type="radio" name="model" value="peugeot" /> 
              <span className='input-text'>Convertible </span><br />
            </div>
     
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Year</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <input className='input-options' type="radio" name="year" value="2022" /> 
              <span className='input-text'>2022</span><br />
              <input className='input-options' type="radio" name="year" value="2021"/>
              <span className='input-text'>2021</span><br />
              <input className='input-options' type="radio" name="year" value="2020" /> 
              <span className='input-text'>2020</span><br />
              <input className='input-options' type="radio" name="year" value="2019" />
              <span className='input-text'>2019</span> <br />
              <p className='seemore-button' onClick={() => setSeeMore({ first: !seeMore.first })}>See More</p>
              <div style={{display: `${seeMore.first === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="year" value="2018" />
              <span className='input-text'>2018</span> <br />
              <input className='input-options' type="radio" name="year" value="2017" />
              <span className='input-text'>2017</span> <br />
              <input className='input-options' type="radio" name="year" value="2016" />
              <span className='input-text'>2016</span> <br />
              <input className='input-options' type="radio" name="year" value="2015" />
              <span className='input-text'>2015</span> <br />
              <input className='input-options' type="radio" name="year" value="2014" />
              <span className='input-text'>2014</span> <br />
              <input className='input-options' type="radio" name="year" value="2013" />
              <span className='input-text'>2013</span> <br />
              <input className='input-options' type="radio" name="year" value="2012" />
              <span className='input-text'>2012</span> <br />
              <input className='input-options' type="radio" name="year" value="2011" />
              <span className='input-text'>2011</span> <br />
              <input className='input-options' type="radio" name="year" value="2010" />
              <span className='input-text'>2010</span> <br />
              </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Transmission</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <input className='input-options' type="radio" name="transmission" value="automatic" /> 
              <span className='input-text'>Automatic</span><br />
              <input className='input-options' type="radio" name="transmission" value="manual"/>
              <span className='input-text'>Manual</span><br />
              <p className='seemore-button' onClick={() => setSeeMore({second: !seeMore.second})}>See More</p>
              <div style={{display: `${seeMore.second === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="transmission" value="continuously variable" />
              <span className='input-text'>Continuously Variable</span> <br />
              <input className='input-options' type="radio" name="transmission" value="semi-automatic" />
              <span className='input-text'>Semi-Automatic</span> <br />
              <input className='input-options' type="radio" name="transmission" value="dual-clutch" />
              <span className='input-text'>Dual-Clutch</span> <br />
              </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Body Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <input className='input-options' type="radio" name="body-type" value="hatchback" /> 
              <span className='input-text'>Hatchback</span><br />
              <input className='input-options' type="radio" name="body-type" value="minivan"/>
              <span className='input-text'>Minivan</span><br />
              <input className='input-options' type="radio" name="body-type" value="cuv"/>
              <span className='input-text'>CUV</span><br />
              <input className='input-options' type="radio" name="body-type" value="coupe"/>
              <span className='input-text'>Coupe</span><br />
              <p className='seemore-button' onClick={() => setSeeMore({third: !seeMore.third})}>See More</p>
              <div style={{display: `${seeMore.third === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="body-type" value="supercar" />
              <span className='input-text'>Supercar</span> <br />
              <input className='input-options' type="radio" name="body-type" value="kammback" />
              <span className='input-text'>Kammback</span> <br />
              <input className='input-options' type="radio" name="body-type" value="convertible" />
              <span className='input-text'>Convertible</span> <br />
              <input className='input-options' type="radio" name="body-type" value="sedan" />
              <span className='input-text'>Sedan</span> <br />
              <input className='input-options' type="radio" name="body-type" value="campervan" />
              <span className='input-text'>Campervan</span> <br />
              <input className='input-options' type="radio" name="body-type" value="micro" />
              <span className='input-text'>Micro</span> <br />
              <input className='input-options' type="radio" name="body-type" value="suv" />
              <span className='input-text'>Suv</span> <br />
              <input className='input-options' type="radio" name="body-type" value="roadster" />
              <span className='input-text'>Roadster</span> <br />
              </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <input className='input-options' type="radio" name="price" value="4.5-million-naira"/>
              <span className='input-text'>N 4.5M</span><br />
              <input className='input-options' type="radio" name="price" value="2-million-naira"/>
              <span className='input-text'>N 2M</span><br />
              <input className='input-options' type="radio" name="price" value="1.5-million-naira"/>
              <span className='input-text'>N 1.5M</span><br />
              <input className='input-options' type="radio" name="price" value="1-million-naira"/>
              <span className='input-text'>N 1M</span><br />
              <p className='seemore-button' onClick={() => setSeeMore({fourth: !seeMore.fourth})}>See More</p>
              <div style={{display: `${seeMore.fourth === true ? 'block' : 'none'}`}}>
              <input className='input-options' type="radio" name="price" value="5-million-naira" />
              <span className='input-text'>N 5M</span> <br />
              <input className='input-options' type="radio" name="price" value="5.5-million-naira" />
              <span className='input-text'>N 5.5M</span> <br />
              <input className='input-options' type="radio" name="price" value="6-million-naira" />
              <span className='input-text'>N 6M</span> <br />
              <input className='input-options' type="radio" name="price" value="7-million-naira" />
              <span className='input-text'>N 7M</span> <br />
              <input className='input-options' type="radio" name="price" value="10-million-naira" />
              <span className='input-text'>N 10M</span> <br />
              </div>
        </AccordionDetails>
      </Accordion>
      </Tab.Pane>
    </Tab.Content>
  </Tab.Container>

    </Col>

    <Col lg="9">
      <div className='num-sort-items'>
        <h2>33,000 Items Available</h2>
        <h2>
          Sort:
        <select>
          <option value="recommended">Recommended</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        </h2>
      </div>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         
         <div className='viewCarGrid'>
           {/* this is for the recommendation tab- map out recommendation car here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Recommeded cars
           map out recommended cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={305} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={3}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className='viewCarGrid'>
           {/* this is for the lexus tab -->
            map out cars with lexus brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Lexus cars
           map out Lexus cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        
        <Tab.Pane eventKey="third">
        <div className='viewCarGrid'>
            {/* this is for the Toyota tab -->
            map out cars with Toyota brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Toyota cars
           map out Toyota cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <div className='viewCarGrid'>
          {/* this is for the Benz tab -->
            map out cars with Benz brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Benz cars
           map out Benz cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
        <div className='viewCarGrid'>
           {/* this is for the Acura tab -->
            map out cars with Acura brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Acura cars
           map out Acura cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="sixth">
        <div className='viewCarGrid'>
           {/* this is for the Honda tab -->
            map out cars with Honda brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Honda cars
           map out Honda cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="seventh">
        <div className='viewCarGrid'>
           {/* this is for the Ford tab -->
            map out cars with Ford brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Ford cars
           map out Ford cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="eighth">
        <div className='viewCarGrid'>
           {/* this is for the Peugeot tab -->
            map out cars with Peugeot brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Peugeot cars
           map out Peugeot car here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="ninth">
        <div className='viewCarGrid'>
           {/* this is for the Land Rover tab -->
            map out cars with LandRover brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only LandRover cars
           map out LandRover car here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="tenth">
        <div className='viewCarGrid'>
           {/* this is for the Mazda tab -->
            map out cars with Mazda brand here */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for Only Mazda cars
           map out Mazda cars here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="eleventh">
        <div className='viewCarGrid'>
           {/* this is for the SeeMore tab -->
            map out cars with Random Brands or More Brands here 
            e.g like car brands that don't have their own tabs 
            */}
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           <ViewCar />
           {/* this is the pagination for More CarBrands 
           map out different or More Car Brands here and integrate it with
           the pagination component */}
           <Stack spacing={2}>
            <Pagination 
            count={400} 
            defaultPage={1} 
            siblingCount={0}
            boundaryCount={1}
            variant="outlined" 
            shape="rounded" />
          </Stack>
         </div>
        </Tab.Pane>
        
        </Tab.Content>
        </Col>
        </Row>
  </div>
      </Tab.Container>
    </div>
    </Div>
  )
}

export default BuyCar

