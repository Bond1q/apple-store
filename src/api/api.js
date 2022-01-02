import axios from "axios";

const url = 'http://localhost:3000/db.json'

export const getItemsFromDB = async () => {
	const items = await axios.get(url)
	return items
}

