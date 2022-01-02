import React from 'react'




const ProductSelectColor = (props) => {
	return (
		<div className='productSelectColor'>
			<div style={{ background: `${props.name}`, border: `2px solid ${props.name}` }} className="dot"></div>
			<div className="colorName">{props.name}</div>
		</div>
	)
}

export default ProductSelectColor
