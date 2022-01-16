import axios from "axios";

const url = 'https://bond1q.github.io/apple-store/db.json'

export const getItemsFromDB = async () => {
	const items = await axios.get(url)
	return items
}

export const isRealCityCountry = async (country, city) => {
	let data
	if (country == '') {
		data = await axios.get(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`)
	} else if (city == '') {
		data = await axios.get(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
	} else {
		data = await axios.get(`https://nominatim.openstreetmap.org/search?city=${city}&country=${country}&format=json`)

	}
	if (data.data.length === 0) {
		return false
	}
	return true
}
