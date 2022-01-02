import React from 'react'
import ProductSelectColor from './ProductSelectColor'
import '../../styles/productColors.scss'

const ProductColors = (props) => {
	const colors = ['red', 'blue', 'white']

	return (
		<div className='productColors'>
			<div className='typeName'>
				Color:
			</div>
			<div className="colors">

				{colors.map((item, index) => {
					return <ProductSelectColor name={item} key={index} />

				})}
			</div>
		</div>
	)
}

export default ProductColors




