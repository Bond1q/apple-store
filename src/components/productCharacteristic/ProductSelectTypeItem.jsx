import React from 'react'
import classNames from 'classnames'
// import "../../styles/productSelectType.scss"

const ProductSelectTypeItem = (props) => {

	return (
		<div onClick={() => props.changeUrl(props.name)}
			className={classNames('pstItem', { activeCategory: props.activeCategory === props.name })}>
			{props.name}
		</div>
	)
}



export default ProductSelectTypeItem
