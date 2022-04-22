import Link from 'next/link'
import styles from '../styles/Home.module.css'




export default function ViewCar({carImg, carName, carPrice, carDescription}) {
  return (
    <div className={styles.ViewCarDiv}>
        <div className={styles.ViewCarImgDiv}>
        <img src={carImg} alt='carpadi-cars'/>
        </div>
        <div className={styles.ViewCarText}>
            <h4>{carName}</h4>
            <h6>{carPrice}</h6>
            <p>{carDescription}</p>
        </div>
            <Link href='/view'>
            <a>View this car</a>
            </Link>
    </div>
  )
}

ViewCar.defaultProps = {
    carImg: 'https://res.cloudinary.com/grootretro/image/upload/v1650118753/carpadi-website/car_placeholder_avikrf.png',
    carName: 'Honda Accord EX-L',
    carPrice: 'N 3.5M',
    carDescription: 'Accident free | full customs duty paid | good history... '
}
