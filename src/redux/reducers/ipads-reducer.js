
import { getItemsFromDB } from "../../api/api"
import { filterItems, toggleFilter } from "../filters/filter"

const SET_IPADS = "SET_IPADS"
const TOGGLE_FILTER = "TOGGLE_FILTER"
const CHANGE_PRICE = "CHANGE_PRICE"

const initialState = {
	ipads: [],
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


const ipadsReducer = (state = initialState, action) => {
	let filteredIpads
	switch (action.type) {
		case SET_IPADS:
			let maxElem = 0, minElem = action.ipads[0].price;
			const modelsList = [], sizesList = [], colorsList = []
			action.ipads.forEach(elem => {
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
			action.ipads.sort((a, b) => a.price - b.price)
			sizesList.sort((a, b) => a - b)
			return {
				...state, ipads: action.ipads, maxPrice: maxElem, minPrice: minElem,
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
			filteredIpads = filterItems(state.ipads, state.activeFilters)
			// console.log(filteredIpads);
			return { ...state, ipads: filteredIpads, activeFilters: { ...state.activeFilters, type: newFilter } }
		case CHANGE_PRICE:
			filteredIpads = filterItems(state.ipads, state.activeFilters, action.minPrice, action.maxPrice)
			return { ...state, ipads: filteredIpads, minPrice: action.minPrice, maxPrice: action.maxPrice }
		default:
			return state
	}
}

export const setIpads = (ipads) => ({ type: SET_IPADS, ipads })
export const toggleIpadFilter = (filterType, filterItem) => ({ type: TOGGLE_FILTER, filterType, filterItem })
export const changePrice = (minPrice, maxPrice) => ({ type: CHANGE_PRICE, minPrice, maxPrice })

export const getIpads = () => {
	return async (dispatch) => {
		const result = await getItemsFromDB()
		return dispatch(setIpads(result.data.ipads))
	}
}

export default ipadsReducer