import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client';
import styles from "../../styles/Pizza.module.css";
import Image from "next/image";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useStore } from '../../store/store.js';
import toast,{ Toaster } from "react-hot-toast"

const Pizza = ({ pizza }) => {
    const src = urlFor(pizza.image).url();
    const [Size, setSize] = useState(1)
    const [Quantity, setQuantity] = useState(1)

    {/* handle quantity */}
    const handleQuan = (type) => {
        type === "inc" ? 
        setQuantity((prev) => prev + 1) : Quantity === 1 ? null : setQuantity((prev) => prev - 1);
    };


    //add to cart
    const addPizza = useStore((state) => state.addPizza)
    const addToCart = () => {
        addPizza({...pizza, price: pizza.price[Size], quantity: Quantity, size: Size})
        toast.success("Added to Cart")
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image 
                loader = {()=> src} 
                alt = ""
                src = {src} layout = "fill" unoptimized objectFit ="cover" />
            </div>

            <div className={styles.right}>
                <span>{pizza.name}</span>
                <span>{pizza.details}</span>

                <span><span style={{color:"var(--themeRed"}}>$</span>{pizza.price[Size]}</span>
                <div className={styles.size}>
                    <span>Size:</span>
                    <div className={styles.sizeVariants}>
                        <div onClick={() => setSize(0)} className={Size === 0 ? styles.selected : ""}>Small</div>
                        <div onClick={() => setSize(1)} className={Size === 1 ? styles.selected : ""}>Medium</div>
                        <div onClick={() => setSize(2)} className={Size === 2 ? styles.selected : ""}>Large</div>
                    </div>
                </div>

                <div className={styles.quantity}>
                    <span>Quantity:</span>
                    <div className={styles.counter}>
                        <Image src={LeftArrow} height={20} width={20} alt = "" objectFit="contain" onClick={() => handleQuan("dec")} />
                        <span>{Quantity}</span>
                        <Image src={RightArrow} height={20} width={20} alt = "" objectFit="contain" onClick={() => handleQuan("inc")} />
                    </div>
                </div>

                <div className={`btn ${styles.btn}`} onClick={addToCart}>
                    Add to Cart
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Pizza;

export async function getStaticPaths () {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );
    return {
      paths: paths.map((slug) => ({params: { slug } })),
      fallback: "blocking",
    };
};

export async function getStaticProps(context){
    const {slug = ""} = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );
    return{
        props: {
            pizza,
        },
    };
}