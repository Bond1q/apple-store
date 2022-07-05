import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/productItem.scss"
import classNames from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';
// import 'react-lazy-load-image-component/src/effects/opacity.css';

const ProductItem = ({ name, color, price, img, size, isVisible }) => {

	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	const urlModel = name.replace(' ', '-')
	const urlSize = size.replace(' ', '-')
	const location = useLocation().pathname
	let url
	switch (location) {
		case '/iphones':
			url = `/iphones/iphone/${urlModel}_${urlSize}_${color}`
			break;
		case '/ipads':
			url = `/ipads/ipad/${urlModel}_${urlSize}_${color}`
			break;
		default:
			break;
	}
	return (
		<Link
			className={classNames('productItem', { hideElem: !isVisible })}
			to={url}>
			<div className="productColumn">
				<div className="productPhoto">
					{/* <img src={img} alt="" /> */}
					<LazyLoadImage
						src={img}
						width={233}
						effect="blur"
					/>
				</div>
				<div className="productName">
					{name}<br /> {size} ({color})
				</div>
				<div className="productPrice">{numberWithSpaces(price)}$</div>
			</div>
		</Link>
	)
}

export default ProductItem
