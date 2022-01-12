export const filterItems = (items, filters, minPrice = 0, maxPrice = 999999) => {
	const filterKeys = Object.keys(filters);
	const itemKeys = Object.keys(items[0]);
	let isOk = true;
	items.forEach(item => {
		if (item.price <= maxPrice && item.price >= minPrice) {
			for (let type of itemKeys) {

				if (filterKeys.includes(type)) {
					if (!filters[type].includes(item[type]) && filters[type].length !== 0) {
						item.isVisible = false;
						isOk = false;
					} else {
						item.isVisible = true;
					}
				}
				if (!isOk) {
					break;
				}
			}
			isOk = true;
		} else {
			item.isVisible = false;
		}


	});

	return items;
}

export const toggleFilter = (filterType, filter) => {

	const index = filterType.indexOf(filter)
	if (index !== -1) {
		filterType.splice(index, 1);
	} else {
		filterType.push(filter)
	}
	return filterType
}


