import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChooseTypeContainer from '../components/typeSelection/ChooseTypeContainer'
import ProductItem from '../components/ProductItem'
import { getIpads } from '../redux/reducers/ipads-reducer'
import "../styles/pageItems.scss"
import Loader from '../components/Loader'
import '../styles/imgSize.scss'
const IpadsPage = React.memo(() => {
	const [ipads, maxPrice, minPrice, models, sizes, colors] = useSelector(({ ipadsStore }) => {
		return [ipadsStore.ipads, ipadsStore.maxPrice, ipadsStore.minPrice, ipadsStore.models,
		ipadsStore.sizes, ipadsStore.colors]
	})

	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getIpads())
	}, [])

	const [isReady, seIsReady] = React.useState(true)
	React.useEffect(() => {
		seIsReady(!isReady)
	}, [ipads, maxPrice, minPrice, models, sizes, colors])

	const items = ipads.length !== 0 ? ipads.map((item, index) => {
		return <ProductItem isVisible={item.isVisible} name={item.name} img={item.imgUrl} color={item.color} price={item.price} key={index} size={item.size} />
	}) : false
	const typeContainer = React.useMemo(() => {
		return <ChooseTypeContainer maxPrice={maxPrice} minPrice={minPrice} types={[{ name: 'Model', items: models },
		{ name: 'Size', items: sizes }, { name: 'Color', items: colors }]} />
	}, [models, sizes, colors])

	return (
		<div>
			{isReady ? <div className="allItems">
				{typeContainer}
				<div className="itemsRow imgSize">
					{items}
				</div>
			</div> : <Loader />}


		</div>
	)
})

export default IpadsPage
