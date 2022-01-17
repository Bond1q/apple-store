import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIphones } from '../redux/reducers/iphones-reducer'
import "../styles/pageItems.scss"
import DevicesPage from './DevicesPage'

const IphonesPage = React.memo(() => {
	const [iphones, maxPrice, minPrice, models, sizes, colors] = useSelector(({ iphonesStore }) => {
		return [iphonesStore.iphones, iphonesStore.maxPrice, iphonesStore.minPrice, iphonesStore.models,
		iphonesStore.sizes, iphonesStore.colors]
	})

	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getIphones())
	}, [])

	const [isReady, seIsReady] = React.useState(true)
	React.useEffect(() => {
		seIsReady(!isReady)
	}, [iphones, models, sizes, colors])


	const types = [{ name: 'Model', items: models },
	{ name: 'Size', items: sizes }, { name: 'Color', items: colors }]

	return (
		<div>
			<DevicesPage
				isReady={isReady}
				devices={iphones}
				maxPrice={maxPrice}
				minPrice={minPrice}
				types={types}
			/>

		</div>
	)
})

export default IphonesPage