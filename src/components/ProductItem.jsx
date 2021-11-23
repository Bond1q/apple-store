import React from 'react'
import { Link } from 'react-router-dom'
import iphone from "../imgs/13_black.jpg"
import "../styles/productItem.scss"

const ProductItem = ({ name, color, price, img, size }) => {
	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	return (
		<Link className="productItem" to="link">
			<div className="productColumn">
				<div className="productPhoto">
					<img src={img} alt="" />
				</div>
				<div className="productName">
					{name}<br /> {size}GB ({color})
				</div>
				<div className="productPrice">{numberWithSpaces(price)}$</div>
			</div>
		</Link>
	)
}

export default ProductItem
