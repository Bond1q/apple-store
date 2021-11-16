import React from 'react'
import { Link } from 'react-router-dom'
import iphone from "../imgs/13_black.jpg"
import "../styles/productItem.scss"

const ProductItem = (props) => {
	return (
		<Link className="productItem" to="link">
			<div className="productColumn">
				<div className="productPhoto">
					<img src={iphone} alt="" />
				</div>
				<div className="productName">
					Apple iPhone 12 Pro Max 128GB (Silver)
				</div>
				<div className="productPrice">1 200 $</div>
			</div>
		</Link>
	)
}

export default ProductItem
