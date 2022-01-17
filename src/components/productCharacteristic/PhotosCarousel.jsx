import React from 'react'
import Carousel from "react-simply-carousel";

const PhotosCarousel = React.memo((props) => {

	const [activeSlideIndex, setActiveSlideIndex] = React.useState(0)
	const pixels = window.innerWidth;
	const width = pixels > 500 ? '450px' : '200px'
	const marginLeft = pixels > 500 ? '30px' : '0px'
	return (
		<div className='carousel'>
			{props.images.length !== 0 ?
				<Carousel
					activeSlideIndex={activeSlideIndex}
					containerProps={{
						style: {
							position: "relative",
							background: "#1d1d1d",
							width: { width },
							justifyContent: 'left',
							marginLeft: marginLeft,
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
				>

					{props.images.length !== 0 ? props.images.map((img, index) => {
						return <div key={index} className='image' style={{
							width: 300, height: 400,
							backgroundImage: `url(${img})`, backgroundPosition: 'center'
						}}></div>

					}) : ''}

				</Carousel> : ''
			}

			<div className={props.images.length === 2 ? "smallPhotos twoPhotos" : "smallPhotos"}>

				{props.images.length !== 0 ? props.images.map((img, index) => {
					return <SmallCarouselPhotos index={index} key={index} setActiveSlideIndex={setActiveSlideIndex} img={img} />

				}) : ''}

			</div>
		</div>
	)
})

const SmallCarouselPhotos = (props) => {
	return (
		<div onClick={() => props.setActiveSlideIndex(props.index)} className="smallPhoto">
			<img src={props.img} alt="" />
		</div>
	)
}

export default PhotosCarousel
