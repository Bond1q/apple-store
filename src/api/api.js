import axios from "axios";

const url = 'https://bond1q.github.io/apple-store/db.json'

export const getItemsFromDB = async () => {
	const items = await axios.get(url)
	return items
}

export const isRealCityCountry = async (country, city) => {
	let data
	try {
		data = await axios.get(`https://nominatim.openstreetmap.org/search?city=${city}&country=${country}&format=json`)
	} catch (error) {
		throw (error)
	}

	if (data.data.length === 0) {
		return false
	}
	return true
}
