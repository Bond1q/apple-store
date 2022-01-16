import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberWithSpaces } from '../assets/numberWuthSpace'
import InputInfo from '../components/BagComponents/InputInfo'
import ProductInfo from '../components/BagComponents/ProductInfo'
import UserInfo from '../components/BagComponents/UserInfo'
import ModalWindow from '../components/ModalWindow'
import { deleteItemFromBag, decreaseItemCount, getItemsFromBag, increaseItemCount, deleteAllItemsFromBag } from '../redux/reducers/bag-reducer'
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

	const onCheckOut = () => {
		setIsCheckOut(false)
		dispatch(deleteAllItemsFromBag())
		setIsSuccessOrder(true)
	}

	const [isSuccessOrder, setIsSuccessOrder] = React.useState(false)
	const [isCheckOut, setIsCheckOut] = React.useState(false)

	return (
		<div className='bag'>

			<div className="title">Shopping Bag</div>
			{items.length === 0 ? <div className='emptyBag'>Bag is empty</div> :
				<div>
					{items.length !== 0 ? items.map((item, index) => {
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
					<div onClick={() => setIsCheckOut(true)} className='confirm' >
						<button>Check out </button>
					</div>


				</div>
			}
			<ModalWindow active={isSuccessOrder} setActive={setIsSuccessOrder}>			 {/* Постав active = isSuccessOrder */}
				<div>Thank you for your purchase ❤</div>
			</ModalWindow>


			<ModalWindow mustBeStatic={true} active={isCheckOut} setActive={setIsCheckOut}>
				<UserInfo setActive={onCheckOut} />
			</ModalWindow>


		</div>
	)
}

export default Bag
