import React from 'react'
import '../styles/productPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getIphoneInfo } from '../redux/reducers/iphoneItem-reducer';
import { useLocation, useHistory } from 'react-router-dom';
import DevicePage from './DevicePage';

const IphoneProductPage = () => {
	const url = useLocation().pathname
	const urlParts = url.split('/')[3].split('_')
	const history = useHistory()
	const dispatch = useDispatch()
	const [name, sizes, colors, activeSize, activeColor, price, images] = useSelector(({ iphoneItemStore }) => {
		const i = iphoneItemStore
		return [iphoneItemStore.name, i.sizes, i.colors, i.activeSize, i.activeColor, i.price, i.images]
	})


	React.useEffect(() => {
		dispatch(getIphoneInfo(url))
	}, [url])


	const changeUrl = (characteristic) => {
		if (sizes.includes(characteristic)) {
			characteristic = characteristic.replace(' ', '-')
			history.push(`/iphones/iphone/${urlParts[0]}_${characteristic}_${urlParts[2]}`)
		} else {
			history.push(`/iphones/iphone/${urlParts[0]}_${urlParts[1]}_${characteristic}`)
		}
	}

	return (
		<div>
			<DevicePage
				changeUrl={changeUrl}
				name={name}
				sizes={sizes}
				colors={colors}
				activeSize={activeSize}
				activeColor={activeColor}
				price={price}
				images={images}
				url={url}
				dispatch={dispatch}
			/>
		</div>
	)
}

export default IphoneProductPage 