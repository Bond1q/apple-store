import React from 'react'
import CTBlockItem from './CTBlockItem'
import "../styles/chooseType.scss"

const ChooseTypeBlock = (props) => {
	console.log(props.items);
	return (
		<div className="chooseTypeBlock">
			<div className="CTBlockName">{props.name}</div>
			{props.items.map((name, index) => {
				return <CTBlockItem name={name} key={index} />
			})}
		</div>
	)
}

export default ChooseTypeBlock
