import React from 'react';
import Image from "next/image";
import { urlFor } from '../lib/client';
import styles from "../styles/Menu.module.css";
import Link from "next/link";

const Menu = ({ pizzas }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall In Love</span>
            </div>
            <div className={styles.menu}>
                {pizzas.map((pizza,id) => {
                    const src = urlFor(pizza.image).url()
                    return(
                        <div className={styles.pizza} key={id}>
                            <Link href={`/pizza/${pizza.slug.current}`} passHref>
                                <div className={styles.imageWrapper}>
                                    <Image loader = {()=> src} 
                                    src={src} alt="" object="cover" layout="fill" />
                                </div>
                            </Link>
                            <span>{pizza.name}</span>
                            <span><span style={{color: "var(--themeRed"}}>$</span>{pizza.price[1]}</span>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Menu