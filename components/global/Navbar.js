import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <p></p>
      <Image src='/logo.png' alt='logo' width={200} height='auto' />
      <div className={styles.center}>
        <i className='ri-mail-send-line text-white'></i>
        <a href='mailto:enquiries@dlops.ai' className={styles.email}>
          &nbsp;enquiries@dlops.ai
        </a>
      </div>
    </nav>
  )
}

export default Navbar
