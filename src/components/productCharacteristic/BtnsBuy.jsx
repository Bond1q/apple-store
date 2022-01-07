import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../../styles/btnsBuy.scss'

const BtnsBuy = React.memo((props) => {

	return (
		<div className='btnsBuy'>
			<div onClick={props.addToBag} className="btnBuy">
				<Link to='/bag'><button>Buy</button></Link>
			</div>
			<div onClick={props.addToBag} className="btnAddCart">
				<button>Add to bag</button>
			</div>
		</div>
	)
})

export default BtnsBuy