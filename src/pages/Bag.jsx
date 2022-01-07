import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberWithSpaces } from '../assets/numberWuthSpace'
import ProductInfo from '../components/BagComponents/ProductInfo'
import SuccessOrder from '../components/SuccessOrder'
import { deleteItemFromBag, decreaseItemCount, getItemsFromBag, increaseItemCount, deleteAllItemsFromBag } from '../redux/reducers/bag-reducer'
import '../styles/bag.scss'
// import { CSSTransition } from 'react-transition-group'


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

	const onCheckOut = () => {
		setIsSuccessOrder(true)
		dispatch(deleteAllItemsFromBag())
	}

	const [isSuccessOrder, setIsSuccessOrder] = React.useState(false)
	const [isCheckOut, setIsCheckOut] = React.useState(false)

	return (
		<div className='bag'>

			<div className="title">Shopping Bag</div>
			{items.length === 0 ? <div className='emptyBag'>Bag is empty</div> :
				<div>
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
					<div onClick={onCheckOut} className='confirm' >
						<button>Check out </button>
					</div>
				</div>
			}
			<SuccessOrder active={isSuccessOrder} setActive={setIsSuccessOrder} />



		</div>
	)
}

export default Bag
