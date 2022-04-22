import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
// components
import MobileNavLinks from '../components/MobileNavLinks';
import Howitworks from '../components/Howitworks.jsx'
import Review from '../components/Review'
import ViewCar from '../components/ViewCar'

const Home: NextPage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);


  return (
<div className={styles.container}>
            {/* this is for mobile */}
    <div className='d-block d-md-none'>
      <header className={styles.landingHeader} onClick={() => setMobileNavOpen(mobileNavOpen)}>
           {/* change h1 and p to desired texts  */}
          <h1>Lorem ipsum dolor sit <br />amet, </h1>
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. </p>
          <form className={styles.searchForm}>
        <div>
        <AiOutlineSearch style={{fontSize: '30px', color: '#212120',opacity: '0.3'}}/>
        </div>
        <input name='search' type='text' className={styles.MobileSearchInput} placeholder="Search cars, Brand, Year......."/>
      <button type='submit' name='submit'>Search</button>
      </form>
      </header>

      <Howitworks />

 {/* images go into the userImg props */}
      <div className={styles.reviewMain}>
        <h1>Here’s what our <br />Customers are saying </h1>
          <Review />
          <Review />
          <Review />
       </div>

      <MobileNavLinks open={mobileNavOpen} />
    </div>


      {/* this is for desktop */}
  <div className='d-none d-md-block'>

      <header className={styles.landingHeader} onClick={() => setMobileNavOpen(mobileNavOpen)}>
        {/* change h1 and p to desired texts  */}
          <h1>Lorem ipsum dolor <br /> sit amet, </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Pulvinar aenean porta facilisi pulvinar. </p>
          <form className={styles.searchForm}>
            <div>
            <AiOutlineSearch style={{fontSize: '18px', color: '#212120', opacity: '0.3'}}/>
            </div>
            <input name='search' type='text' className={styles.MobileSearchInput} placeholder="Search cars, Brand, Year......."/>
          <button type='submit' name='submit'>Search</button>
        </form>
      </header>

      <Howitworks />

       {/* images go into the userImg props */}
      <div className={styles.reviewMain}>
        <h1>Here’s what our Customers are saying </h1>
        <div className={styles.reviewScroll}>
          <Review />
          <Review />
          <Review />
       </div>
      </div>

     
      <div className={styles.ViewCarMain}>
        <h2>Shop Cars</h2>
        <div className={styles.ViewCarFlex}>
        <ViewCar />
        <ViewCar />
        <ViewCar />
        <ViewCar />
        </div>
            <Link href=''>
              <a className={styles.ViewAllCarButton}>View All Cars</a>
            </Link>
      </div>

   </div>
</div>
  )
}

export default Home
