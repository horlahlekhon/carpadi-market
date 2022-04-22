import footerStyles from '../styles/footer.module.css'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className={footerStyles.footer}>

<div className='d-block d-md-none'>
      <div className={footerStyles.footerLinks}>
      <ul>
       <Link href=''><a>Search Used Cars</a></Link>
       <Link href=''><a>Search New Cars</a></Link>
       <Link href=''><a>How to buy a car</a></Link>
     </ul>
    <ul>
       <Link href=''><a>Get an offer</a></Link>
       <Link href=''><a>How to Sell/ Trade a car</a></Link>
     </ul>
     <ul>
       <Link href=''><a>About Carpadi</a></Link>
       <Link href=''><a>Carpadi Reviews</a></Link>
     </ul>
     <ul>
       <Link href=''><a>FAQ</a></Link>
       <Link href=''><a>Live Chat</a></Link>
       <Link href=''><a>Contact us</a></Link>
       <Link href=''><a>support@carpadi.com</a></Link>
     </ul>
      </div>
    

      <div className={footerStyles.bottomFooter}>
        <p>Copyright &copy; 2022 | Powered By Carpadi</p>
        <img style={{width: '140px', margin: '0'}}  src="https://res.cloudinary.com/grootretro/image/upload/v1650198282/carpadi-website/light__blue__logo_mw1gct.png" alt="carpadi_logo"></img>

      </div>
  </div>
  

  <div className='d-none d-md-block'>
  <div className={footerStyles.footerLinks}>
      <ul>
        <h2>Shop</h2>
       <Link href=''><a>Search Used Cars</a></Link>
       <Link href=''><a>Search New Cars</a></Link>
       <Link href=''><a>How to buy a car</a></Link>
     </ul>
    <ul>
      <h2>Sell / Trade</h2>
       <Link href=''><a>Get an offer</a></Link>
       <Link href=''><a>How to Sell/ Trade a car</a></Link>
     </ul>
     <ul>
       <h2>Learn</h2>
       <Link href=''><a>About Carpadi</a></Link>
       <Link href=''><a>Carpadi Reviews</a></Link>
     </ul>
     <ul>
       <h2>Help</h2>
       <Link href=''><a>FAQ</a></Link>
       <Link href=''><a>Live Chat</a></Link>
       <Link href=''><a>Contact us</a></Link>
       <Link href=''><a>support@carpadi.com</a></Link>
     </ul>
      </div>
    

      <div className={footerStyles.bottomFooter}>
        <p>Copyright &copy; 2022 | Powered By Carpadi</p>
        <img src='https://res.cloudinary.com/grootretro/image/upload/v1646753366/carpadi-website/footer_carpadi_white_logo_ekoy02.svg' alt='footer_logo' />

      </div>
  </div>
    </footer>
  )
}
