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
			colorName = '#918b84'
			break;
		case 'Space Gray':
			colorName = '#65737e'
			break;
		case 'Pink':
			colorName = '#ffc0cb'
			break;
		default:
			break;
	}


	return (
		<div onClick={() => props.changeUrl(props.name)} className='productSelectColor'>
			<div style={{ background: `${colorName}`, border: `2px solid ${colorName}` }}
				className={classNames('dot', { activeColor: props.activeColor === props.name })}></div>
			<div className={classNames("colorName", { activeColorName: props.activeColor === props.name })}>{props.name}</div>
		</div>
	)
}
// , (prevProps, nextProps) => {
// 	if (prevProps.activeColor !== nextProps.activeColor) {
// 		return false
// 	} else {
// 		return true
// 	}
// })

export default ProductSelectColor
