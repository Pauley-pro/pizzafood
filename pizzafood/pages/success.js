import React from 'react';
import OrderModal from '../components/OrderModal';

const success = () => {
  return (
    <div>
        <OrderModal opened={true} PaymentMethod={1} />
    </div>
  )
}

export default success