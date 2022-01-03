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

	const [isReady, seIsReady] = React.useState(true)
	const [name, sizes, colors, activeSize, activeColor, price, images] = useSelector(({ iphoneItemStore }) => {
		const i = iphoneItemStore
		return [iphoneItemStore.name, i.sizes, i.colors, i.activeSize, i.activeColor, i.price, i.images]
	})
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getIphoneInfo(url))
	}, [])
	React.useEffect(() => {
		seIsReady(!isReady)
	}, [name, sizes, colors, activeSize, activeColor, price, images])
	console.log(isReady);
	function numberWithSpaces(x) {
		if (x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}
		return
	}
	return (
		<div>
			{isReady && <div className='productPage'>
				<div className="sides">
					<div className="side">
						<PhotosCarousel images={images} />

					</div>
					<div className="side">
						<div className='model'>{name} ({activeColor})</div>
						<div className="price">${numberWithSpaces(price)}</div>
						<ProductSelectType categoryName={"Sizes"} categories={sizes} activeCategory={activeSize} />
						<ProductColors colors={colors} activeColor={activeColor} />
						<BtnsBuy />
					</div>
				</div>
			</div>}
		</div>



	)
}

export default ProductPage 