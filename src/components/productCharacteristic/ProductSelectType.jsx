import React from 'react'
import ProductSelectTypeItem from './ProductSelectTypeItem'
import "../../styles/productSelectType.scss"

const ProductSelectType = (props) => {
	const names = ['64GB', '128GB']
	return (
		<div className='productSelectType'>
			<div className='typeName'>
				Size:
			</div>
			<div className="types">
				{names.map((item, index) => {
					return <ProductSelectTypeItem name={item} key={index} />
				})}
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
