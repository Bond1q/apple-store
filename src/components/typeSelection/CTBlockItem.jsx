import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { toggleIphoneFilter } from '../../redux/reducers/iphones-reducer';
import "../../styles/chooseType.scss"

const CTBlockItem = (props) => {
	let onClickHandler;
	const dispatch = useDispatch();
	const [isClicked, setIsClicked] = React.useState(false)
	const url = useLocation().pathname
	// console.log(url);
	if (url === "/iphones") {
		onClickHandler = () => {
			if (isClicked) {
				setIsClicked(false)
			} else {
				setIsClicked(true)
			}
		}
	}

	React.useEffect(() => {
		if (isClicked) {
			dispatch(toggleIphoneFilter(props.blockName, props.name));
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
}

export default React.memo(CTBlockItem)
