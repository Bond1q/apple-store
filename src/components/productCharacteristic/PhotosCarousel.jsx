import React from 'react'
import img1 from '../../imgs/iphones/12/12_2.jpg'
import img2 from '../../imgs/iphones/12/12_black_2.jpg'
import img3 from '../../imgs/iphones/12/12_black.jpg'
import Carousel from "react-simply-carousel";
import '../../styles/photosCarousel.scss'
const PhotosCarousel = () => {
	const [activeSlideIndex, setActiveSlideIndex] = React.useState(0)
	const img0 = 'https://i.ibb.co/3hHLqqX/13-pro-max.jpg'
	return (
		<div className='carousel'>
			<Carousel
				activeSlideIndex={activeSlideIndex}
				containerProps={{
					style: {
						position: "relative",
						background: "#1d1d1d",
						width: "450px",
						justifyContent: 'left',
						marginLeft: '30px',
						marginTop: '0px'

					}
				}}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={1}
				itemsToScroll={1}
				forwardBtnProps={{
					children: "ᐅ",
					style: {
						alignSelf: "center",
						justifyContent: 'right',
						width: 60,
						verticalAlign: 'middle',
						height: "400px",
						background: "none",
						border: 'none',
						cursor: 'pointer',
						color: 'rgb(96 96 96)',
						fontSize: '16px',
						hover: {
							background: "#ffff"
						},

					}
				}}
				backwardBtnProps={{
					children: "ᐊ",
					style: {
						alignSelf: "center",
						justifyContent: 'left',
						width: 60,
						verticalAlign: 'middle',
						height: "400px",
						background: "none",
						border: 'none',
						cursor: 'pointer',
						color: 'rgb(96 96 96)',
						fontSize: '16px',
						':hover': {
							background: 'red'
						},
					},

				}}
			// speed={400}
			// infinite={false}
			// centerMode={true}
			>
				<div className='image' style={{ width: 300, height: 400, backgroundImage: `url(https://i.ibb.co/3hHLqqX/13-pro-max.jpg)`, backgroundPosition: 'center' }}></div>
				<div className='image' style={{ width: 300, height: 400, backgroundImage: `url(${img3})`, backgroundPosition: 'center' }}></div>
				{/* <div className='image' style={{ width: 300, height: 400, backgroundImage: `url(${img1})`, backgroundPosition: 'center' }}></div> */}

			</Carousel>
			<div className="smallPhotos">
				<SmallCarouselPhotos index={0} img={img0} setActiveSlideIndex={setActiveSlideIndex} />
				<SmallCarouselPhotos index={1} img={img3} setActiveSlideIndex={setActiveSlideIndex} />
				<SmallCarouselPhotos index={1} img={img3} setActiveSlideIndex={setActiveSlideIndex} />

				{/* <SmallCarouselPhotos index={2} img={img1} setActiveSlideIndex={setActiveSlideIndex} /> */}
			</div>
		</div>
	)
}

const SmallCarouselPhotos = (props) => {
	return (
		<div onClick={() => props.setActiveSlideIndex(props.index)} className="smallPhoto">
			<img src={props.img} alt="" />
		</div>
	)
}

export default PhotosCarousel
