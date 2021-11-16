import React from 'react'
import "../styles/chooseType.scss"

const CTBlockItem = (props) => {
	return (
		<div className="CTBlockItem">
			<label className="setType" >
				{props.name}
				<input type="checkbox" />
				<span className="checkmark"></span>
			</label>
		</div>
	)
}

export default CTBlockItem
