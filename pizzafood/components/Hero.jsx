import React from 'react';
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons" 
import Pizza1 from "../assets/p1.jpg"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.cherryDiv}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="Cherry" width={40} height={25}/>
        </div>
      
      
        <div className={styles.heroText}>
          <span>Be The Fastest</span>
          <span> In Delivery</span>
          <span> Your <span className={styles.pizza}>Pizza</span></span>
        </div>

        <span className={styles.miniText}>
          Our Mission is to fill your tommy with delicious food and with fast free delivery
        </span>

        {/* The style for btn was put in the global.css file to cater for all buttons. However, was used in this stead because a specificfic styling will also be used additionally otherwise, it'd have been declared as {styles.btn} */}
        <button className={`btn ${styles.btn}`}>Get Started</button>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={styles.ContactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={styles.Pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <div className={styles.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{color: "var(--themeRed)"}}>$</span>7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero