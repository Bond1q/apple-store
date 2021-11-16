import React from 'react'
import ChooseTypeBlock from './ChooseTypeBlock';
import "../styles/chooseType.scss"

const ChooseType = () => {
	const [minPrice, setMinPrice] = React.useState(0);
	const [maxPrice, setMaxPrice] = React.useState(10000);
	const changeMinPice = (e) => {
		if (!isNaN(+e.target.value.replace(/ /g, ''))) {
			setMinPrice(e.target.value.replace(/ /g, ''))
		}
	}
	const changeMaxPice = (e) => {
		if (!isNaN(+e.target.value.replace(/ /g, ''))) {
			setMaxPrice(e.target.value.replace(/ /g, ''))
		}
	}
	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	return (
		<div className="chooseType">
			<div className="chooseTypePriceBlock">
				<div className="CTPrice">Price</div>
				<input onClick={(e) => e.target.select()} className="priceInput1" value={numberWithSpaces(minPrice)} onChange={changeMinPice} />
				<span className="dash">‒</span>
				<input onClick={(e) => e.target.select()} className="priceInput2" value={numberWithSpaces(maxPrice)} onChange={changeMaxPice} />
				<span className="currency">$</span>

			</div>
			<ChooseTypeBlock />
			<ChooseTypeBlock />

		</div>
	)
}

export default ChooseType
