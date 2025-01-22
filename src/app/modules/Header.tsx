import Image from 'next/image';
import styles from '../styles/header.module.css';
import React from "react";
function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/colorful-bird-illustration-gradient-b.png" 
              alt="Logo"
              width={50} 
              height={50} 
              className={styles.logoImage} 
            />
            <span className={styles.logoText}>FitTech</span>
          </div>
          <nav>
            <a href="#form" className={styles.navLink}>
              Inscreva-se
            </a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;