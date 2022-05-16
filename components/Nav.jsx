import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { BiMenu } from "react-icons/bi";
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';


function Nav({buyLinkDisplay, searchFormDisplay, smSearchFormDisplay, faqWeight, faqSize}) {
  const [expanded, setExpanded] = useState('panel1');
  const [searchValue, setSearchValue] = useState("")
  const [changeExpanded, setChangeExpanded] = useState(true)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const SearchSubmission = (event) => {
    event.preventDefault()
  }

  //function to handle SearchInput
  const handleSearchInput = (e) => {
    setSearchValue(e.target.search);
  }

  //function to reset the searchinput
  const resetSearchInput = () => {
    setSearchValue("");
  }

const typographyStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',

}

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    padding: '10px 0',

    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem', color: 'black' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgb(265,265, 265)'
        : '#ffffff7',
    flexDirection: 'reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  

  
  return (

  
        <>
<Navbar className="d-block d-lg-none" expand={false}>
  <Container fluid>
  <Navbar.Toggle aria-controls="offcanvasNavbar" className="navigation-links d-block d-lg-none">
          <BiMenu style={{fontSize:'30px'}} />
      </Navbar.Toggle>
       <Link href="/">
          <a className="link navigation-names">
            <img className="logo d-block d-lg-none" style={{width: '140px'}}  src="https://res.cloudinary.com/grootretro/image/upload/v1650198282/carpadi-website/light__blue__logo_mw1gct.png" alt="carpadi_logo"></img>
          </a>
      </Link>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
      <img className="logo d-block d-lg-none" style={{width: '140px'}}  src="https://res.cloudinary.com/grootretro/image/upload/v1650198282/carpadi-website/light__blue__logo_mw1gct.png" alt="carpadi_logo"></img>
      </Offcanvas.Header>
      <Offcanvas.Body>

    <div>
      <Accordion style={{display: `${buyLinkDisplay}`}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={typographyStyle}>Buy Car</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='menu-list'>
            <li>
              <Link href='/buy_car'>
                <a>New Cars</a>
              </Link>
            </li>
            <li>
              <Link href='/buy_car'>
                <a>Used Cars</a>
              </Link>
            </li>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{display: `${smSearchFormDisplay}`}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={typographyStyle}>Search for Cars</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className='nav-search' onClick={SearchSubmission}>
          <div>
        <AiOutlineSearch style={{fontSize: '30px', color: '#212120',opacity: '0.3'}}/>
        </div>
            <input name='search' type='text' value={searchValue} onChange={handleSearchInput} placeholder='Search cars, Brand, Year.......'/>
            <MdClose onClick={resetSearchInput} style={{fontSize: '24px', color: '#243773', cursor: 'pointer'}}/>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={typographyStyle}>Sell your Car</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='menu-list'>
            <li>
              <Link href='/sell_car'>
                <a>Sell Car</a>
              </Link>
            </li>
            
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography style={typographyStyle}>About Carpadi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{padding: '20px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography style={typographyStyle}>Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='menu-list'>
            <li>
              <Link href='/'>
                <a onClick={() => setClickedLink(true)}>FAQ</a>
              </Link>
            </li>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography style={typographyStyle}>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='menu-list'>
            <li>
              <Link href='/'>
                <a><MailOutlineIcon style={{color:'#323232',fontSize:'15px', }}/>    
                <span style={{
                  fontweight: '400',
                  fontSize: '14px',
                  lineHeight: '24px',
                  textDecoration: 'underline',
                  color: '#243773',
                  margin: '0 5px'
                  }}>support@carpadi.com
                  </span></a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a><PhoneInTalkIcon style={{color:'#323232',fontSize:'15px', }}/>    
                <span style={{
                  fontweight: '400',
                  fontSize: '14px',
                  lineHeight: '24px',
                  textDecoration: 'underline',
                  color: '#243773',
                  margin: '0 5px'
                  }}>+(234) 703 379 4644
                  </span></a>
              </Link>
            </li>
            
            </div>
        </AccordionDetails>
      </Accordion>
    </div>

      </Offcanvas.Body>
    </Navbar.Offcanvas>
   
  </Container>
</Navbar>
          <header className="navigation-wrapper d-block d-lg-blo">
            <div className="navigation-header">
              <span className="navigation-names">
                <Link href="/">
                  <a className="link">
                  <img className="logo d-block d-lg-none" style={{width: '140px'}}  src="https://res.cloudinary.com/grootretro/image/upload/v1650198282/carpadi-website/light__blue__logo_mw1gct.png" alt="carpadi_logo"></img>
                  <img className="logo d-none d-lg-block" src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/carpadi_logo_rokoey.svg" alt="carpadi_logo"></img>
                  </a>
                </Link>
                <div className='car-trade'>
                <Link href='/buy_car'>
                <a style={{display: `${buyLinkDisplay}`}}>Buy Car</a>
                </Link>
                <Link href='/sell_car'>
                <a>Sell Your Car</a>
                </Link>
                <form style={{display: `${searchFormDisplay}`}} className='nav-search' onClick={SearchSubmission }>
                  <div>
                <AiOutlineSearch style={{fontSize: '30px', color: '#212120',opacity: '0.3'}}/>
                </div>
                
                <input name='search'type='text' value={searchValue} onChange={handleSearchInput} placeholder='Search cars, Brand, Year.......'/>
                {/* Mdclose icon => clear search input */}
                  <MdClose onClick={resetSearchInput} style={{fontSize: '24px', color: '#243773', cursor: 'pointer'}}/>
                </form>
                </div>
            
              </span>
  
            <div style={{display: 'flex'}}>
                <Link href="/faq">
                 <a className='faq-lg-link d-none d-lg-block' style={{fontWeight: `${faqWeight}`, fontSize: `${faqSize}`}}>FAQ</a> 
                 </Link>
           </div>
            </div>
          </header>
        </>
  
    
  )
}

export default Nav


Nav.defaultProps = {
  buyLinkDisplay: 'block',
  searchFormDisplay: 'none',
  smSearchFormDisplay: 'none',
  faqSize: '18px',
  faqWeight: '500'
}

// if nav searchFormDisplay is flex then set first child to none