import axios from "axios";

const url = 'https://bond1q.github.io/apple-store/db.json'

export const getItemsFromDB = async () => {
	const items = await axios.get(url)
	return items
}

