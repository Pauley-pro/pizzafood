import React from 'react';
import styles from "../styles/Footer.module.css";
import { UilFacebook, UilTwitter, UilInstagram } from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={styles.social}>
        <UilFacebook className={styles.soc} size={45} />
        <UilTwitter className={styles.soc} size={45} />
        <UilInstagram className={styles.soc} size={45} />
      </div>
      <div className={styles.logo}>
        <Image src={Logo} alt = "Logo" width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  )
}

export default Footer