import React from 'react'
import CTBlockItem from './CTBlockItem'
import "../../styles/chooseType.scss"

const ChooseTypeBlock = (props) => {

	return (
		<div className="chooseTypeBlock">
			<div className="CTBlockName">{props.name}</div>
			{props.items.map((name, index) => {
				return <CTBlockItem minPrice={props.minPrice} maxPrice={props.maxPrice}
					blockName={props.name} name={name} key={index} />
			})}
		</div>
	)
}

export default React.memo(ChooseTypeBlock)
