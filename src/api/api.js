import axios from "axios";

export const getIphoneFromDB = async () => {
	const items = await axios.get("http://localhost:3000/db.json")
	console.log(items);
	return items
}