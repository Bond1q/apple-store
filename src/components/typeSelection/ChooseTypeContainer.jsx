import React from 'react'
import ChooseTypeBlock from './ChooseTypeBlock';
import "../../styles/chooseType.scss"
import { useDispatch } from 'react-redux';
import { changePrice } from '../../redux/reducers/iphones-reducer';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { changeIpadsPrice } from '../../redux/reducers/ipads-reducer';
import { numberWithSpaces } from '../../assets/numberWuthSpace';

const ChooseTypeContainer = (props) => {
	const url = useLocation().pathname
	const dispatch = useDispatch()
	const [minPrice, setMinPrice] = React.useState(props.minPrice);
	const [maxPrice, setMaxPrice] = React.useState(props.maxPrice);
	const [shoudFilterByPrice, setShoudFilterByPrice] = React.useState(false)
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


	React.useEffect(() => {
		setMinPrice((props.minPrice))
		setMaxPrice((props.maxPrice))

	}, [props.minPrice, props.maxPrice])

	React.useEffect(() => {
		if (shoudFilterByPrice) {
			if (url === "/iphones") {
				dispatch(changePrice(minPrice, maxPrice))
			} else if (url === "/ipads") {
				dispatch(changeIpadsPrice(minPrice, maxPrice))
			}

		}
	}, [shoudFilterByPrice])

	const [isFiltersClicked, setIsFiltersClicked] = React.useState(false)

	const typeBlocks = props.types.map((elem, index) => {
		return <ChooseTypeBlock minPrice={minPrice} maxPrice={maxPrice} name={elem.name} items={elem.items} key={index} />
	})
	return (

		<div>
			<div onClick={() => setIsFiltersClicked(!isFiltersClicked)} className="mobileScreenFilter">
				Filters
			</div>
			<div className={isFiltersClicked ? "chooseType " : "chooseType chooseTypeVisible"} >
				<div className="chooseTypePriceBlock">
					<div className="CTPrice">Price</div>
					<input onFocus={() => setShoudFilterByPrice(false)} onBlur={() => setShoudFilterByPrice(true)}
						onClick={(e) => e.target.select()} className="priceInput1" value={numberWithSpaces(minPrice)} onChange={changeMinPice} />
					<span className="dash">‒</span>
					<input onFocus={() => setShoudFilterByPrice(false)} onBlur={() => setShoudFilterByPrice(true)}
						onClick={(e) => e.target.select()} className="priceInput2" value={numberWithSpaces(maxPrice)} onChange={changeMaxPice} />
					<span className="currency">$</span>

				</div>
				{typeBlocks}
			</div>
		</div>

	)

}

export default React.memo(ChooseTypeContainer)
