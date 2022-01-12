import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import appleLogo from "../imgs/appleLogo.png"
import bag from "../imgs/bag.png"
import "../styles/header.scss"

const Header = React.memo((props) => {
	const [isCategoriesClicked, setIsCategoriesClicked] = React.useState(false)
	return (

		<div className="header">
			<div className="bigRowHeader">
				<Route to="/iphones">
					<div className="appleLogo"><img src={appleLogo} alt="" /></div>
				</Route>

				<div onClick={() => setIsCategoriesClicked(false)}
					className={isCategoriesClicked ? 'smallScreenCategories' : 'smallRowHeader'}>
					<NavLink to="/iphones" className={isActive => isActive ? 'activePage' : ''} >iPhone</NavLink>
					<NavLink to="/ipads" className={isActive => isActive ? 'activePage' : ''}>iPad</NavLink>
					<NavLink to="/macbooks" className={isActive => isActive ? 'activePage' : ''}>Mac</NavLink>
				</div>
				<div onClick={() => setIsCategoriesClicked(!isCategoriesClicked)} className="mobileScreen">
					Categories
				</div>
				<NavLink onClick={() => setIsCategoriesClicked(false)}
					to="/bag" className={isActive => isActive ? 'activeBag' : ''}>
					<div className="bagHeader">
						<img src={bag} alt="" />
						{/* 
							<div className="counter">
								<img src={counterBag} alt="" />
								<div className="counterNum">5</div>
							</div> */}
					</div>
				</NavLink>
			</div>
		</div>
	)
})

export default Header
