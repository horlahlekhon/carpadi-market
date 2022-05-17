import styles from '../styles/Home.module.css'

export default function Howitworks({lgAd}) {
  return (
    <div className={styles.instructionMain}>
            {/* this is for mobile */}
      <div className='d-block d-md-none'>

      <h2>How It Works</h2>
      <div className={styles.instructFlexDiv}>
      <img style={{width: '221px', height: '138px'}} src='https://res.cloudinary.com/grootretro/image/upload/v1650486192/carpadi-website/lg_buy_sell_ad_xczzg5.png' alt='man-advertiser'/>

        <div className={styles.instructDescriptionDiv}>
              <div className={styles.instructions}>
                <span>1</span> 
                <div className={styles.description}>
                    <h3>Tell Us About Your Car</h3>
                    <p>Tell us a little about your Vehicle, and we will <br /> give you an Instant offer for good cash or trade.</p>
                </div>
              </div>
              <div className={styles.instructions}>
                <span>2</span>
                <div className={styles.description}>
                    <h3>Trade From Anywhere</h3>
                    <p>Tell us about your car and a Carpadi inspectionist<br /> will come to inspect your car.</p>
                </div>
              </div>
              <div className={styles.instructions}>
                <span>3</span>
                <div className={styles.description}>
                    <h3>Get Paid</h3>
                    <p>After inspection you will get a digital Payment, or <br />trade up and we are going to deliver<br /> your New ride.</p>
                </div>
              </div>
        </div>
        </div>

        </div>

              {/* this is for desktop */}
        <div className='d-none d-md-block'>
            
      <h2>How Carpadi Works</h2>
      <div className={styles.instructFlexDiv}>
      <img src={lgAd} alt='man-advertiser'/>

        <div className={styles.instructDescriptionDiv}>
              <div className={styles.instructions}>
                <span>1</span> 
                <div className={styles.description}>
                    <h3>Buy Car</h3>
                    <p>we sell the Best Brand New and used cars in nigeria which was<br /> shipped from abroad or anywhere</p>
                </div>
              </div>
              <div className={styles.instructions}>
                <span>2</span>
                <div className={styles.description}>
                    <h3>Sell your car</h3>
                    <p>Tell us a little about your Vehicle, and we will give you an Instant <br /> offer for good cash</p>
                </div>
              </div>
              <div className={styles.instructions}>
                <span>3</span>
                <div className={styles.description}>
                    <h3>Trade your car</h3>
                    <p>Tell us a little about your Vehicle, and we will give you an Instant<br /> offer for Trade.</p>
                </div>
              </div>
        </div>
        </div>
        </div>
    </div>
  )
}


Howitworks.defaultProps = {
 lgAd: 'https://res.cloudinary.com/grootretro/image/upload/v1650486192/carpadi-website/lg_buy_sell_ad_xczzg5.png'
}