import React from 'react'
import ProductSelectColor from './ProductSelectColor'

const ProductColors = React.memo((props) => {

	return (
		<div className='productColors'>
			<div className='typeName'>
				Color:
			</div>
			<div className="colors">

				{props.colors.length !== 0 ? props.colors.map((item, index) => {
					return <ProductSelectColor changeUrl={props.changeUrl} name={item} key={index} activeColor={props.activeColor} />

				}) : ''}
			</div>
		</div>
	)
}

	, (prevProps, nextProps) => {
		if (prevProps.activeCategory !== nextProps.activeCategory) {
			return false
		} else {
			return true
		}
	})

export default ProductColors




