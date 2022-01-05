const ADD_ITEM_TO_BAG = 'ADD_ITEM_TO_BAG'
const GET_ITEMS_FROM_BAG = 'GET_ITEMS_FROM_BAG'
const INCREASE_ITEM_COUNT = 'INCREASE_ITEM_COUNT'
const DECREASE_ITEM_COUNT = 'DECREASE_ITEM_COUNT'
const DELETE_ITEM_FROM_BAG = 'DELETE_ITEM_FROM_BAG'

const initialState = {
	items: [],
	totalPrice: 0,
}

const bagReducer = (state = initialState, action) => {
	let price = 0

	const toSumPrice = () => {
		state.items.forEach(item => {
			price += item.countPrice
			price = (+price.toFixed(2))
		})
		return price
	}
	switch (action.type) {
		case ADD_ITEM_TO_BAG:
			let isItemInList = false
			for (let item of state.items) {
				if (item.name === action.name) {
					item.count += 1;
					item.countPrice = (+(item.price * item.count).toFixed(2))
					isItemInList = true
					break
				}
			}

			if (!isItemInList) {
				state.items.push({ name: action.name, img: action.img, url: action.url, price: action.price, count: 1, countPrice: action.price })
			}
			toSumPrice()
			return { ...state, totalPrice: price }


		case GET_ITEMS_FROM_BAG:
			return { ...state }


		case INCREASE_ITEM_COUNT:
			for (let item of state.items) {
				if (item.name === action.name) {
					item.count += 1;
					item.countPrice = (+(item.price * item.count).toFixed(2))
					break
				}
			}
			toSumPrice()
			return { ...state, totalPrice: price }


		case DECREASE_ITEM_COUNT:
			for (let item of state.items) {
				if (item.name === action.name) {
					item.count -= 1;
					if (item.count == 0) {
						let index = state.items.indexOf(item)
						state.items.splice(index, 1)
					} else {
						item.countPrice = (+(item.price * item.count).toFixed(2))
					}
					break
				}
			}
			toSumPrice()
			return { ...state, totalPrice: price }


		case DELETE_ITEM_FROM_BAG:
			for (let item of state.items) {
				if (item.name === action.name) {
					let index = state.items.indexOf(item)
					state.items.splice(index, 1)
					break
				}
			}
			toSumPrice()
			return { ...state, totalPrice: price }

		default:
			return state;
	}

}

export const addItemToBag = ({ img, url, price, name }) => ({ type: ADD_ITEM_TO_BAG, img, url, price, name })
export const getItemsFromBag = () => ({ type: GET_ITEMS_FROM_BAG })
export const increaseItemCount = (name) => ({ type: INCREASE_ITEM_COUNT, name })
export const decreaseItemCount = (name) => ({ type: DECREASE_ITEM_COUNT, name })
export const deleteItemFromBag = (name) => ({ type: DELETE_ITEM_FROM_BAG, name })

export default bagReducer