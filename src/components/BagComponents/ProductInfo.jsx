import React from 'react'
import { Link } from 'react-router-dom'
import iphone from '../../imgs/13_black.jpg'
const ProductInfo = (props) => {
	return (
		<div className='productInfo'>
			<div className="bagRow">
				<div className="productPhoto">
					<img src={props.img} alt="" />
				</div>
				<div className="info">
					<div className="productName">
						<Link to={props.url}>{props.name}</Link>
					</div>
					<div className="counter">
						<button onClick={() => props.onIncreaseCounter(props.name)}>+</button>
						<div className="count">{props.count}</div>
						<button onClick={() => props.onDecreaseCounter(props.name)} className='minus'>‒</button>
					</div>
					<div className="smallPriceRow">
						<div className="price">{props.price}$</div>
						<div onClick={() => props.onDeleteItemFromBag(props.name)} className="deleteProduct">×</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
