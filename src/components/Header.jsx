import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import appleLogo from "../imgs/appleLogo.png"
import bag from "../imgs/bag.png"
import "../styles/header.scss"
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
	const location = useLocation()
	// console.log(location);
	return (

		<div className="header">
			<div className="bigRowHeader">
				<Link to="/iphones">
					<div className="appleLogo"><img src={appleLogo} alt="" /></div>
				</Link>

				<div className="smallRowHeader">
					<NavLink to="/iphones" className={isActive => isActive ? 'activePage' : ''} >iPhone</NavLink>
					<NavLink to="/ipads">iPad</NavLink>
					<NavLink to="/macs">Mac</NavLink>
				</div>
				<Link to="/cart">
					<div className="bagHeader">
						<img src={bag} alt="" />

						{/* <div className="counter">
						<img src={counterBag} alt="" />
						<div className="counterNum">5</div>
					</div> */}
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
