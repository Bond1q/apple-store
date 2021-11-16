import React from 'react'
import ChooseType from '../components/ChooseType'
import ProductItem from '../components/ProductItem'
import "../styles/productItem.scss"

const IphonesPage = () => {
	return (
		<div>
			{/* <ProductItem /> */}
			<div className="rowww">
				<ChooseType />

				<div className="pageRow">
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</div>

		</div>
	)
}

export default IphonesPage