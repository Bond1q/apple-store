import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberWithSpaces } from '../assets/numberWuthSpace'
import ProductInfo from '../components/BagComponents/ProductInfo'
import { deleteItemFromBag, decreaseItemCount, getItemsFromBag, increaseItemCount } from '../redux/reducers/bag-reducer'
import '../styles/bag.scss'
const Bag = () => {
	const dispatch = useDispatch()
	const [items, totalPrice] = useSelector(({ bagStore }) => [bagStore.items, bagStore.totalPrice])
	React.useEffect(() => {
		dispatch(getItemsFromBag)

	}, [])
	const onIncreaseCounter = (name) => {
		dispatch(increaseItemCount(name))
	}
	const onDecreaseCounter = (name) => {

		dispatch(decreaseItemCount(name))
	}
	const onDeleteItemFromBag = (name) => {
		dispatch(deleteItemFromBag(name))
	}

	return (
		<div className='bag'>
			<div className="title">Shopping Bag</div>

			{items.length != 0 ? items.map((item, index) => {
				return <ProductInfo onIncreaseCounter={onIncreaseCounter}
					onDecreaseCounter={onDecreaseCounter} key={index}
					onDeleteItemFromBag={onDeleteItemFromBag}
					img={item.img} name={item.name} count={item.count} price={item.countPrice} url={item.url} />
			}) : ''}

			<div className="allPrice">
				<div className='totalTitle'>Total</div>
				<div className="totalPrice">
					{numberWithSpaces(totalPrice)}$
				</div>
			</div>
			<div className="confirm">
				<button>Check out </button>
			</div>
		</div>
	)
}

export default Bag
