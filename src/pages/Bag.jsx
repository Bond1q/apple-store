import React from 'react'
import ProductInfo from '../components/BagComponents/ProductInfo'
import '../styles/bag.scss'
const Bag = () => {
	return (
		<div className='bag'>
			<div className="title">Shopping Bag</div>

			<ProductInfo />
			<div className="allPrice">
				<div className='totalTitle'>Total</div>
				<div className="totalPrice">
					1500$
				</div>
			</div>
		</div>
	)
}

export default Bag
