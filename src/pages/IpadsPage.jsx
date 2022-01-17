import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIpads } from '../redux/reducers/ipads-reducer'
import "../styles/pageItems.scss"
import '../styles/imgSize.scss'
import DevicesPage from './DevicesPage'

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
	}, [ipads, models, sizes, colors])


	const types = [{ name: 'Model', items: models },
	{ name: 'Size', items: sizes }, { name: 'Color', items: colors }]


	return (
		<div className='imgSize'>
			<DevicesPage
				isReady={isReady}
				devices={ipads}
				maxPrice={maxPrice}
				minPrice={minPrice}
				types={types}
			/>


		</div>
	)
})

export default IpadsPage
