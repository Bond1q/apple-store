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
	]
}

const iphones = (state = initialState, action) => {
	switch (action.type) {
		case SET_IPHONES:
			return { ...state, iphones: action.iphones }

		default:
			return state
	}
}

export default iphones