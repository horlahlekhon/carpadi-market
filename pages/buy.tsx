// @ts-nocheck
import { useState } from 'react'
import { Col, Nav as Navigation, Row, Tab } from 'react-bootstrap'
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
import {models, carInfo, carBrandLogo} from '../dummyData/data'



const BuyCar = () => {

  const [recommendedDisplay, setRecommendedDisplay] = useState(true)
  const [seeMore, setSeeMore] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false
  })
  


  return (
   
   <>
   <Nav 
    smSearchFormDisplay='block'
    searchFormDisplay="flex" 
    buyLinkDisplay="none"
    faqSize="20px"
    faqWeight="300"
    />
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
        {carBrandLogo.map(({eventKey, brand, logo, index}) => (
          <Navigation.Item key={index}>
            <Navigation.Link eventKey={eventKey}>
              <img style={{width: '28px', height: '24px'}} src={logo} alt={brand} />
               {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </Navigation.Link>
          </Navigation.Item>

        ))}

    
      </Navigation>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         <div className='viewCarGrid'>
           {/* this is for the recommendation tab- map out recommendation car here */}
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
            {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
        {carBrandLogo.map(({eventKey, brand, logo, index}) => (
          <Navigation.Item key={index}>
            <Navigation.Link eventKey={eventKey}>
              <img style={{width: '30px'}} src={logo} alt={brand} />
               {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </Navigation.Link>
          </Navigation.Item>

        ))}

    
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

    <Tab.Content style={{width: '278px'}}>
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
              {carBrandLogo.map(({brand, index}) => (
                <div key={index}>
                  <input className='input-options' type="radio" name="brand" value={brand} /> 
                  <span className='input-text'>{brand.charAt(0).toUpperCase() + brand.slice(1)}</span><br />
                  </div>
              ))}
            {/* this is the radio input for car models
            change if necessary */}
            <h4 className='model-title'>Models</h4>
  
              {models.map(({model, index}) => (
                <div key={index}>
                  <input className='input-options' type="radio" name="model" value={model} /> 
                  <span className='input-text'>{model.charAt(0).toUpperCase() + model.slice(1)}</span><br />
                  </div>
              ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
           {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
         {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
          {carInfo.map(({img, name, price, description, id}) => (
             <ViewCar 
             key={id}
             carImg={img} 
             carName={name} 
             carPrice={price} 
             carDescription={description}/>
           ))}
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
        </Tab.Content>
        </Col>
        </Row>
  </div>
      </Tab.Container>
    </div>
    </>
  )
}

export default BuyCar

