import React from 'react'
import iphone from '../../imgs/13_black.jpg'
const ProductInfo = () => {
	return (
		<div className='productInfo'>
			<div className="bagRow">
				<div className="productPhoto">
					<img src={iphone} alt="" />
				</div>
				<div className="info">
					<div className="productName">
						iPhone 12 Pro Max 164GB (White)
					</div>
					<div className="counter">
						<button>+</button>
						<div className="count">2</div>
						<button>-</button>
					</div>
					<div className="smallPriceRow">
						<div className="price">1400$</div>
						<div className="deleteProduct">×</div>
					</div>

				</div>

			</div>

		</div>
	)
}

export default ProductInfo
