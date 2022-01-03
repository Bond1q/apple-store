import React from 'react'
import classNames from 'classnames'



const ProductSelectColor = (props) => {

	let colorName
	switch (props.name) {
		case 'Black':
			colorName = 'black'
			break;
		case 'Blue':
			colorName = '#1f4870'
			break;
		case 'Silver':
			colorName = '#a9a29a'
			break;
		default:
			break;
	}


	return (
		<div className='productSelectColor'>
			<div style={{ background: `${colorName}`, border: `2px solid ${colorName}` }}
				className={classNames('dot', { activeColor: props.activeColor === props.name })}></div>
			<div className={classNames("colorName", { activeColorName: props.activeColor === props.name })}>{props.name}</div>
		</div>
	)
}

export default ProductSelectColor
