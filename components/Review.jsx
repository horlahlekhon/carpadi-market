import styles from '../styles/Home.module.css'


export default function Review({userName, userComment, userImg}) {
  return (
    <div className={styles.reviewDiv}>
      <div className={styles.profilepic}>
      <img src={userImg} />
      </div>
        <h2>{userName}</h2>
        <p>{userComment}</p>

    </div>
  )
}


Review.defaultProps = {
  userName: 'Jane A. James',
  userComment: 'Nunc magna nibh, mollis at ultrices quis, gravida a magna. Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. Nullam id purus commodo, convallis leo id.',
  userImg: '',

}