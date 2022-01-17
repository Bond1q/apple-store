import React from 'react';
import '../styles/productPage.scss'
import ProductSelectType from '../components/productCharacteristic/ProductSelectType';
import PhotosCarousel from '../components/productCharacteristic/PhotosCarousel';
import ProductColors from '../components/productCharacteristic/ProductColors';
import BtnsBuy from '../components/productCharacteristic/BtnsBuy';
import { addItemToBag } from '../redux/reducers/bag-reducer';
import { numberWithSpaces } from '../assets/numberWuthSpace';
import Loader from '../components/Loader';

const DevicePage = ({
	changeUrl, name, sizes,
	colors, activeSize, activeColor, price, images, url,
	dispatch
}) => {

	const fullName = `${name} ${activeSize} (${activeColor})`
	const [isReady, seIsReady] = React.useState(true)

	const addDeviceToBag = () => {
		dispatch(addItemToBag({ name: fullName, img: images[0], url: url, price: price }))
	}
	React.useEffect(() => {
		seIsReady(!isReady)
	}, [name, sizes, colors, activeSize, activeColor, price, images, url])



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
						<BtnsBuy addToBag={addDeviceToBag} />
					</div>
				</div>
			</div> :
				<Loader />}

		</div>
	);
};

export default DevicePage;