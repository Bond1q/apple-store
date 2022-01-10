import { getItemsFromDB } from "../../api/api"

const SET_IPAD_INFO = 'SET_IPAD_INFO'

const initialState = {
	name: '',
	sizes: [],
	colors: [],
	activeSize: '',
	activeColor: '',
	price: 0,
	images: []
}

const ipadItemReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_IPAD_INFO:
			let ipadPrice, imagesList = []
			const sizesList = [], colorsList = []
			const curIphoneInfo = action.url.split('/')[3].split('_')
			const model = curIphoneInfo[0].replace('-', ' ')
			const size = curIphoneInfo[1].replace('-', ' ')
			const color = curIphoneInfo[2]
			action.ipads.forEach(ipad => {
				if (ipad.name == model) {
					if (!sizesList.includes(ipad.size)) {
						sizesList.push(ipad.size)
					}
					if (!colorsList.includes(ipad.color)) {
						colorsList.push(ipad.color)
					}
					if (ipad.size == size && ipad.color == color) {
						ipadPrice = ipad.price
						imagesList = [ipad.imgUrl, ...ipad.moreImgs]

					}


				}
			})

			return {
				...state, name: model, activeSize: size, activeColor: color,
				sizes: sizesList, colors: colorsList, price: ipadPrice, images: imagesList
			}

		default:
			return state
	}
}

export const setIpadInfo = (ipads, url) => ({ type: SET_IPAD_INFO, ipads, url })

export const getIpadInfo = (url) => {
	return async (dispatch) => {

		const result = await getItemsFromDB()
		return dispatch(setIpadInfo(result.data.ipads, url))
	}
}

export default ipadItemReducer