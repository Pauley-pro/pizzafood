import React,{useState} from 'react';
import styles from "../styles/OrderModal.module.css";
import { Modal, useMantineTheme } from '@mantine/core';
import { createOrder } from '../lib/orderHandler';
import toast,{Toaster} from 'react-hot-toast';
import { useStore } from "../store/store.js";
import {useRouter} from "next/router";

const OrderModal = ({opened, setOpened, PaymentMethod}) => {
    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormData] = useState({})
    const handleInput = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }
    const resetCart = useStore((state)=>state.resetCart)
    const total = typeof window !== 'undefined' && localStorage.getItem("total")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({...FormData, total, PaymentMethod})
        toast.success("Order Placed");
        resetCart();
        {
            typeof window !== "undefined" && localStorage.setItem("order", id);
        }

        router.push(`/order/${id}`)
    }
    return (
        <div>
            <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened = {opened}
                onClose = {() => setOpened(null)}
                >
                {/* Modal content */}
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <input onChange={handleInput} type = "text" name= "name" required placeholder="Paul" />
                    <input onChange={handleInput} type = "text" name= "phone" required placeholder="08134325238" />
                    <textarea onChange={handleInput} name="address" rows = {3} placeholder="No. 8 Amoo estate"></textarea>
                    <span>You will pay
                        <span> ${total}</span> on delivery
                    </span>
                    <button type = "submit" className = "btn">Place Order</button>
                </form>
                <Toaster />
            </Modal>
        </div>
    )
}

export default OrderModal