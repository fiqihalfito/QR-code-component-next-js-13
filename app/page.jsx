import Image from 'next/image'
// import styles from './page.module.css'
import styles from './page.module.scss'
import qrCodeImage from '../public/images/image-qr-code.png'

function CardImage() {
  return <Image src={qrCodeImage} alt="QR code picture" className={styles.image} />
}

function CardBody() {
  return (
    <div className={styles.cardBody}>
      <p className={styles.cardTitle}>
        Improve your front-end skills by building project
      </p>
      <p className={styles.cardText}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  )
}

function Card() {
  return (
    <div className={styles.card}>
      <CardImage />
      <CardBody />
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  )
}


