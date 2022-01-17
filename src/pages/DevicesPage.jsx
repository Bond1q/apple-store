import React from 'react';
import ChooseTypeContainer from '../components/typeSelection/ChooseTypeContainer'
import ProductItem from '../components/ProductItem'
import "../styles/pageItems.scss"
import Loader from '../components/Loader'

const DevicesPage = ({ isReady, devices, maxPrice, minPrice, types }) => {
	const items = devices.length !== 0 ? devices.map((item, index) => {
		return <ProductItem isVisible={item.isVisible} name={item.name} img={item.imgUrl} color={item.color} price={item.price} key={index} size={item.size} />
	}) : false
	const typeContainer = React.useMemo(() => {
		return <ChooseTypeContainer maxPrice={maxPrice} minPrice={minPrice} types={types} />
	}, [types])

	return (
		<div>
			{isReady ? <div className="allItems">
				{typeContainer}
				<div className="itemsRow">
					{items}
				</div>
			</div> : <Loader />}


		</div>
	);
};

export default DevicesPage;