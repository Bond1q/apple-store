import { getItemsFromDB } from "../../api/api"
import { filterItems, toggleFilter } from "../filters/filter"

const SET_IPHONES = "SET_IPHONES"
const TOGGLE_FILTER = "TOGGLE_FILTER"
const CHANGE_PRICE = "CHANGE_PRICE"

const initialState = {
	iphones: [],
	maxPrice: 0,
	minPrice: 0,
	models: [],
	sizes: [],
	colors: [],
	activeFilters: {
		name: [],
		size: [],
		color: []
	}

}

const iphonesReducer = (state = initialState, action) => {
	let filteredIphones
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
				elem.isVisible = true;
			})
			action.iphones.sort((a, b) => a.price - b.price)
			sizesList.sort((a, b) => a - b)
			return {
				...state, iphones: action.iphones, maxPrice: maxElem, minPrice: minElem,
				models: modelsList, sizes: sizesList, colors: colorsList
			}
		case TOGGLE_FILTER:
			let type, newFilter;
			switch (action.filterType) {
				case "Model":
					type = 'name'
					break;
				case "Size":
					type = 'size'
					break;
				case "Color":
					type = 'color'
					break;
				default:
					break;
			}

			newFilter = toggleFilter(state.activeFilters[type], action.filterItem)
			filteredIphones = filterItems(state.iphones, state.activeFilters)
			return { ...state, iphones: filteredIphones, activeFilters: { ...state.activeFilters, type: newFilter } }

		case CHANGE_PRICE:

			filteredIphones = filterItems(state.iphones, state.activeFilters, action.minPrice, action.maxPrice)
			return { ...state, iphones: filteredIphones, minPrice: action.minPrice, maxPrice: action.maxPrice }
		default:
			return state
	}
}

export const setIphones = (iphones) => ({ type: SET_IPHONES, iphones })
export const toggleIphoneFilter = (filterType, filterItem) => ({ type: TOGGLE_FILTER, filterType, filterItem })
export const changePrice = (minPrice, maxPrice) => ({ type: CHANGE_PRICE, minPrice, maxPrice })

export const getIphones = () => {
	return async (dispatch) => {
		const result = await getItemsFromDB()
		return dispatch(setIphones(result.data.iphones))
	}
}

export default iphonesReducer