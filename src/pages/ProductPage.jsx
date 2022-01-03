import React from 'react'
import '../styles/productPage.scss'
import ProductSelectType from '../components/productCharacteristic/ProductSelectType';
import PhotosCarousel from '../components/productCharacteristic/PhotosCarousel';
import ProductColors from '../components/productCharacteristic/ProductColors';
import BtnsBuy from '../components/productCharacteristic/BtnsBuy';
import { useDispatch, useSelector } from 'react-redux';
import { getIphoneInfo } from '../redux/reducers/iphoneItem-reducer';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const ProductPage = () => {
	const url = useLocation().pathname
	const urlParts = url.split('/')[3].split('_')

	console.log(urlParts);
	const history = useHistory()
	const [isReady, seIsReady] = React.useState(true)
	const [name, sizes, colors, activeSize, activeColor, price, images] = useSelector(({ iphoneItemStore }) => {
		const i = iphoneItemStore
		return [iphoneItemStore.name, i.sizes, i.colors, i.activeSize, i.activeColor, i.price, i.images]
	})
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(getIphoneInfo(url))
	}, [url])

	React.useEffect(() => {
		seIsReady(!isReady)
	}, [name, sizes, colors, activeSize, activeColor, price, images, url])

	function numberWithSpaces(x) {
		if (x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}
		return
	}

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
			{isReady && <div className='productPage'>
				<div className="sides">
					<div className="side">
						<PhotosCarousel images={images} />

					</div>
					<div className="side">
						<div className='model'>{name} ({activeColor})</div>
						<div className="price">${numberWithSpaces(price)}</div>
						<ProductSelectType changeUrl={changeUrl} categoryName={"Sizes"} categories={sizes} activeCategory={activeSize} />
						<ProductColors changeUrl={changeUrl} colors={colors} activeColor={activeColor} />
						<BtnsBuy />
					</div>
				</div>
			</div>}
		</div>



	)
}

export default ProductPage 