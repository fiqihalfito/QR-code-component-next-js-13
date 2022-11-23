import Image from 'next/image'
// import styles from './page.module.css'
import styles from './page.module.scss'
import qrCodeImage from '../public/images/image-qr-code.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image src={qrCodeImage} alt="QR code picture" className={styles.image} />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardTitle}>
            Improve your front-end skills by building projects
          </p>
          <p className={styles.cardText}>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}
