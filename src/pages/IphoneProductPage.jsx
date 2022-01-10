import React from 'react'
import '../styles/productPage.scss'
import ProductSelectType from '../components/productCharacteristic/ProductSelectType';
import PhotosCarousel from '../components/productCharacteristic/PhotosCarousel';
import ProductColors from '../components/productCharacteristic/ProductColors';
import BtnsBuy from '../components/productCharacteristic/BtnsBuy';
import { useDispatch, useSelector } from 'react-redux';
import { getIphoneInfo } from '../redux/reducers/iphoneItem-reducer';
import { useLocation, useHistory } from 'react-router-dom';
import { addItemToBag } from '../redux/reducers/bag-reducer';
import { numberWithSpaces } from '../assets/numberWuthSpace';
import Loader from '../components/Loader';

const IphoneProductPage = () => {
	const url = useLocation().pathname
	const urlParts = url.split('/')[3].split('_')
	const history = useHistory()
	const [isReady, seIsReady] = React.useState(true)
	const dispatch = useDispatch()
	const [name, sizes, colors, activeSize, activeColor, price, images] = useSelector(({ iphoneItemStore }) => {
		const i = iphoneItemStore
		return [iphoneItemStore.name, i.sizes, i.colors, i.activeSize, i.activeColor, i.price, i.images]
	})

	const fullName = `${name} ${activeSize} (${activeColor})`

	React.useEffect(() => {
		dispatch(getIphoneInfo(url))
	}, [url])

	React.useEffect(() => {
		seIsReady(!isReady)
	}, [name, sizes, colors, activeSize, activeColor, price, images, url])



	const changeUrl = (characteristic) => {
		if (sizes.includes(characteristic)) {
			characteristic = characteristic.replace(' ', '-')
			history.push(`/iphones/iphone/${urlParts[0]}_${characteristic}_${urlParts[2]}`)
		} else {
			history.push(`/iphones/iphone/${urlParts[0]}_${urlParts[1]}_${characteristic}`)

		}
	}

	const addIphoneToBag = () => {
		dispatch(addItemToBag({ name: fullName, img: images[0], url: url, price: price }))
	}


	return (
		<div>
			{isReady ? <div className='productPage'>
				<div className="sides">
					<div className="side">
						<PhotosCarousel images={images} />

					</div>
					<div className="side">
						<div className='model'>{name} ({activeColor})</div>
						<div className="price">${numberWithSpaces(price)}</div>
						<ProductSelectType changeUrl={changeUrl} categoryName={"Sizes"} categories={sizes} activeCategory={activeSize} />
						<ProductColors changeUrl={changeUrl} colors={colors} activeColor={activeColor} />
						<BtnsBuy addToBag={addIphoneToBag} />
					</div>
				</div>
			</div> :
				<Loader />}

		</div>



	)
}

export default IphoneProductPage 