import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { changeIpadsPrice, toggleIpadFilter } from '../../redux/reducers/ipads-reducer';
import { toggleIphoneFilter, changePrice } from '../../redux/reducers/iphones-reducer';
import "../../styles/chooseType.scss"

const CTBlockItem = React.memo((props) => {

	let onClickHandler;
	const dispatch = useDispatch();
	const [isClicked, setIsClicked] = React.useState(false)
	const url = useLocation().pathname
	onClickHandler = () => {
		if (isClicked) {
			setIsClicked(false)
		} else {
			setIsClicked(true)
		}
	}

	React.useEffect(() => {
		if (isClicked) {
			if (url === "/iphones") {
				dispatch(toggleIphoneFilter(props.blockName, props.name));
				dispatch(changePrice(props.minPrice, props.maxPrice))
			} else if (url === "/ipads") {
				dispatch(toggleIpadFilter(props.blockName, props.name))
				dispatch(changeIpadsPrice(props.minPrice, props.maxPrice))
			}

		}

	}, [isClicked])
	return (
		<div onClick={onClickHandler} className="CTBlockItem">
			<label className="setType" >
				{props.name}
				<input type="checkbox" />
				<span className="checkmark"></span>
			</label>
		</div>
	)
})

export default CTBlockItem
