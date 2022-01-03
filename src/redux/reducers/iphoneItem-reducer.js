import { getItemsFromDB } from "../../api/api"

const SET_IPHONE_INFO = 'SET_IPHONE_INFO'

const initialState = {
	name: '',
	sizes: [],
	colors: [],
	activeSize: '',
	activeColor: '',
	price: 0,
	images: []
}

const iphoneItemReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_IPHONE_INFO:
			let iphonePrice, imagesList = []
			const sizesList = [], colorsList = []
			const curIphoneInfo = action.url.split('/')[3].split('_')
			const model = curIphoneInfo[0].replace('-', ' ')
			const size = curIphoneInfo[1].replace('-', ' ')
			const color = curIphoneInfo[2]
			action.iphones.forEach(iphone => {
				if (iphone.name == model) {
					if (!sizesList.includes(iphone.size)) {
						sizesList.push(iphone.size)
					}
					if (!colorsList.includes(iphone.color)) {
						colorsList.push(iphone.color)
					}
					if (iphone.size == size && iphone.color == color) {
						iphonePrice = iphone.price
						imagesList = [iphone.imgUrl, ...iphone.moreImgs]

					}

				}
			})

			return {
				...state, name: model, activeSize: size, activeColor: color,
				sizes: sizesList, colors: colorsList, price: iphonePrice, images: imagesList
			}

		default:
			return state
	}
}

export const setIphoneInfo = (iphones, url) => ({ type: SET_IPHONE_INFO, iphones, url })

export const getIphoneInfo = (url) => {
	return async (dispatch) => {

		const result = await getItemsFromDB()
		return dispatch(setIphoneInfo(result.data.iphones, url))
	}
}

export default iphoneItemReducer