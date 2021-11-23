import { getIphoneFromDB } from "../../api/api"

const SET_IPHONES = "SET_IPHONES"

const initialState = {
	iphones: [
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
		{ name: "Apple iPhone 12 Pro Max", img: "13_black.jpg", color: "Silver", size: 128, price: 1200 },
	],
	maxPrice: 0,
	minPrice: 0,
	models: [],
	sizes: [],
	colors: []
}

const iphonesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IPHONES:
			let maxElem = 0, minElem = action.iphones[0].price;
			const modelsList = [], sizesList = [], colorsList = []
			action.iphones.forEach(elem => {
				if (!modelsList.includes(elem.name)) {
					modelsList.push(elem.name)
				}
				if (!sizesList.includes(elem.size)) {
					sizesList.push(elem.size)
				}
				if (!colorsList.includes(elem.color))
					colorsList.push(elem.color)

				if (elem.price > maxElem) {
					maxElem = elem.price
				} else if (elem.price < maxElem) {
					maxElem = elem.price
				}
			})
			sizesList.sort()
			return {
				...state, iphones: action.iphones, maxPrice: maxElem, minPrice: minElem,
				models: modelsList, sizes: sizesList, colors: colorsList
			}

		default:
			return state
	}
}

export const setIphones = (iphones) => ({ type: SET_IPHONES, iphones })

export const getIphones = () => {
	console.log('work');
	return async (dispatch) => {
		const result = await getIphoneFromDB()
		console.log(result);
		return dispatch(setIphones(result.data.iphones))
	}
}

export default iphonesReducer