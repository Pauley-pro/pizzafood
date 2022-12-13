import React,{useEffect, useState} from 'react';
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from '../store/store.js';
import Link from "next/link";


const Navbar = () => {
  const [Order, setOrder] = useState("")
  useEffect(()=>{
    setOrder(localStorage.getItem("order"));
  },[])

  const state = useStore((state) => state)
  console.log(state)
  const items = useStore((state) => state.cart.pizzas.length)
  return (
    <div className={styles.header}>
      <div className={styles.logo} >
        <Image src={Logo} alt = "Logo" width={50} height={50} />
        <span>Fudo</span>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="../">Home</Link>
        </li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      <div className={styles.rightSide}>
        <Link href = "/cart">
          <div className={styles.cart}>
            <UilShoppingBag size={35} color="#2E2E2E"/>
            <div className={styles.badge}>{items}</div>
          </div>
        </Link>
        {Order && (
          <Link href = {`/order/${Order}`}>
            <div className={styles.cart}>
              <UilReceipt size={35}  color="#2E2E2E" />
                {Order != "" && <div className={styles.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar;