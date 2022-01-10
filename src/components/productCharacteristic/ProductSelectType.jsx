import React from 'react'
import ProductSelectTypeItem from './ProductSelectTypeItem'

const ProductSelectType = React.memo((props) => {

	return (
		<div className='productSelectType'>
			<div className='typeName'>
				{props.categoryName}
			</div>
			<div className="types">
				{props.categories.length != 0 ? props.categories.map((item, index) => {
					return <ProductSelectTypeItem changeUrl={props.changeUrl} name={item} key={index} activeCategory={props.activeCategory} />
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


export default ProductSelectType
