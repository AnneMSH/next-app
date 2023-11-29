import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
        <div>@All rights reserved</div>
        <div className={styles.socialNetworks}>
          <Image src='/1.png' width ={15} height ={15} className={styles.icon} alt='fb'/>
          <Image src='/2.png' width ={15} height ={15} className={styles.icon} alt='insta'/>
          <Image src='/3.png' width ={15} height ={15} className={styles.icon} alt='X'/>
          <Image src='/4.png' width ={15} height ={15} className={styles.icon} alt='Youtube'/>
        </div>
    </div>
    
  )
}

export default Footer