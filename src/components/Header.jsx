import React from 'react'
import { Link } from 'react-router-dom'
import appleLogo from "../imgs/appleLogo.png"
import bag from "../imgs/bag.png"
import "../styles/header.scss"

function Header() {
	return (
		<div className="header">
			<div className="bigRowHeader">
				<Link to="/home">
					<div className="appleLogo"><img src={appleLogo} alt="" /></div>
				</Link>

				<div className="smallRowHeader">
					<Link to="/iphones">iPhone</Link>
					<Link to="/ipads">iPad</Link>
					<Link to="/macs">Mac</Link>
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
