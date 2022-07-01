import React from 'react'
import SubTotal from '../Subtotal/SubTotal'
import './CheckOut.css'


function CheckOut() {
  return (
    <div className='checkout'>

        <div className='checkout_left'>
          <img className='checkout_ad' src='https://cdn.shotstack.io/au/v1/msgtwx8iw6/94824246-12b8-4373-828f-8ad60a319a8b.jpg' alt=''/>
        

          <div className='checkout_title'>
            <h2>Your Shopping Cart</h2>

            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}

          </div>
        </div>
        
        <div className='checkout_right'>
          <h2>Subtotal</h2>
          <SubTotal />
        </div>

    </div>
  )
}

export default CheckOut