import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { AiOutlineSearch } from "react-icons/ai";
// components
import Howitworks from '../components/Howitworks.jsx'
import Review from '../components/Review'
import ViewCar from '../components/ViewCar'
import axios from 'axios';
import { useEffect } from 'react';

const Home: NextPage = () => {


  useEffect(() => {

    const auth = {
      username: 'lekan',
      password: 'secret',
    };
  


    axios.post('https://carpadi.herokuapp.com/api/v1/auth/login/', auth   
     ).then((res) => console.log(res))
      .catch(err => console.log(err))

    
  }, [])
  


  return (
<div className={styles.container}>
            {/* this is for mobile */}
    <div className='d-block d-md-none'>
      <header className={styles.landingHeader}>
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

    <div className={styles.instructionContainer}>
    <Howitworks />
    </div>
      

 {/* images go into the userImg props */}
      <div className={styles.reviewMain} id="getToReview">
        <h1>Here’s what our <br />Customers are saying </h1>
          <Review />
          <Review />
          <Review />
       </div>

    </div>


      {/* this is for desktop */}
  <div className='d-none d-md-block'>

      <header className={styles.landingHeader}>
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

      <div className={styles.instructionContainer}>
    <Howitworks />
    </div>

       {/* images go into the userImg props */}
      <div className={styles.reviewMain} id="getToReview">
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
            <Link href='/buy'>
              <a className={styles.ViewAllCarButton}>View All Cars</a>
            </Link>
      </div>

   </div>
</div>
  )
}

export default Home
