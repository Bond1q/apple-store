import React from 'react'
import ProductSelectTypeItem from './ProductSelectTypeItem'
import "../../styles/productSelectType.scss"

const ProductSelectType = (props) => {
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


			{/* <div className='typeName'>
				Colors
				{colors.map((item, index) => {
					<Pro name={item} key={index}/>
				})}
				
			</div> */}
		</div>
	)
}

export default ProductSelectType
