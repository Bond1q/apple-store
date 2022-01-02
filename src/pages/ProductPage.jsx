import React from 'react'
import '../styles/productPage.scss'
import ProductSelectType from '../components/productCharacteristic/ProductSelectType';
import PhotosCarousel from '../components/productCharacteristic/PhotosCarousel';
import ProductColors from '../components/productCharacteristic/ProductColors';
import BtnsBuy from '../components/productCharacteristic/BtnsBuy';
import { useDispatch, useSelector } from 'react-redux';
import { getIphoneInfo } from '../redux/reducers/iphoneItem-reducer';
import { useLocation } from 'react-router-dom';
const ProductPage = () => {
	const url = useLocation().pathname


	const [name, sizes, colors, activeSize, activeColor, price] = useSelector(({ iphoneItemStore }) => {
		const i = iphoneItemStore
		return [iphoneItemStore.name, i.sizes, i.color, i.activeSize, i.activeColor, i.price]
	})
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(getIphoneInfo(url))
	}, [])
	return (
		<div className='productPage'>
			<div className="sides">
				<div className="side">
					<PhotosCarousel />

				</div>
				<div className="side">
					<div className='model'>iPhone 13 Pro Max (Blue)</div>
					<div className="price">$999.99</div>
					<ProductSelectType />

					<ProductColors />
					<BtnsBuy />
				</div>

			</div>

		</div>
	)
}

export default ProductPage 