import React from 'react'
import CTBlockItem from './CTBlockItem'
import "../styles/chooseType.scss"

const ChooseTypeBlock = () => {
	const names = ["iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro max", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro max",]
	return (
		<div className="chooseTypeBlock">
			<div className="CTBlockName">Model</div>
			{names.map((name, index) => {
				return <CTBlockItem name={name} key={index} />
			})}
		</div>
	)
}

export default ChooseTypeBlock
