import axios from "axios";

const url = '/db.json'

export const getItemsFromDB = async () => {
	const items = await axios.get(url)
	return items
}

