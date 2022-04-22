import React, {useState, useEffect} from 'react'
import classNames from 'classnames';
import MobileNavLinks from './MobileNavLinks.jsx';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

// import { Link as Anchor } from 'gatsby';


function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });


  useEffect(() => {
    if(mobileNavOpen === true){
      document.body.style.overflow = 'hidden';
    }

    else if (mobileNavOpen === false){
      document.body.style.overflow = 'unset';
    }
  }, [mobileNavOpen])

  return (

  
        <>
          <header className="navigation-wrapper">
            <div className="navigation-header">
            <span className="navigation-links d-block d-lg-none">
                <button
                  aria-label="Toggle Mobile Menu Button"
                  className={active}
                  onClick={() => {
                    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                  }}
                >
                  <GiHamburgerMenu style={{fontSize:'24px'}} />
                </button>
              </span>
              <span className="navigation-names">
                <Link href="/">
                  <a className="link">
                  <img className="logo d-block d-lg-none" style={{width: '140px'}}  src="https://res.cloudinary.com/grootretro/image/upload/v1650198282/carpadi-website/light__blue__logo_mw1gct.png" alt="carpadi_logo"></img>
                  <img className="logo d-none d-lg-block" src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/carpadi_logo_rokoey.svg" alt="carpadi_logo"></img>
                  </a>
                </Link>
                <div className='car-trade'>
                <Link href=''>
                <a>Buy Car</a>
                </Link>
                <Link href=''>
                <a>Sell Your Car</a>
                </Link>
                </div>
            
              </span>
  
            <div style={{display: 'flex'}}>
                <Link href="/faq">
                 <a className='faq-lg-link d-none d-lg-block'>FAQ</a> 
                 </Link>
           </div>
            </div>
          </header>
          <MobileNavLinks open={mobileNavOpen} />
        </>
  
    
  )
}

export default Navbar