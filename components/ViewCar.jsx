import Link from 'next/link'


export default function ViewCar(props) {
  return (
    <div className="ViewCarDiv">
        <div className="ViewCarImgDiv">
        <img src={props.carImg} alt="carpadi-cars"/>
        </div>
        <div className="ViewCarText">
            <h4>{props.carName}</h4>
            <h6>{props.carPrice}</h6>
            <p>{props.carDescription}</p>
        </div>
            <Link href='/car-info'>
            <a>View this car</a>
            </Link>
    </div>
  )
}

