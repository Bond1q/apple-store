import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChooseTypeContainer from '../components/typeSelection/ChooseTypeContainer'
import ProductItem from '../components/ProductItem'
import { getIphones } from '../redux/reducers/iphones-reducer'
import "../styles/pageItems.scss"

const IphonesPage = () => {
	const [iphones, maxPrice, minPrice, models, sizes, colors] = useSelector(({ iphonesStore }) => {
		return [iphonesStore.iphones, iphonesStore.maxPrice, iphonesStore.minPrice, iphonesStore.models,
		iphonesStore.sizes, iphonesStore.colors]
	})


	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getIphones())

	}, [])

	const items = iphones.length != 0 ? iphones.map((item, index) => {
		return <ProductItem isVisible={item.isVisible} name={item.name} img={item.imgUrl} color={item.color} price={item.price} key={index} size={item.size} />
	}) : false
	// console.log(items);
	const typeContainer = React.useMemo(() => {
		return <ChooseTypeContainer maxPrice={maxPrice} minPrice={minPrice} types={[{ name: 'Model', items: models },
		{ name: 'Size', items: sizes }, { name: 'Color', items: colors }]} />
	}, [models, sizes, colors])
	// const typeContainer = <ChooseTypeContainer maxPrice={maxPrice} minPrice={minPrice} types={[{ name: 'Model', items: models },
	// { name: 'Size', items: sizes }, { name: 'Color', items: colors }]} />
	return (
		<div>
			<div className="allItems">
				{typeContainer}
				<div className="itemsRow">
					{items}
				</div>
			</div>

		</div>
	)
}

export default IphonesPage