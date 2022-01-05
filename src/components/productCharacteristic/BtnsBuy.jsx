import React from 'react'
import '../../styles/btnsBuy.scss'

const BtnsBuy = React.memo((props) => {
	return (
		<div className='btnsBuy'>
			<div className="btnBuy">
				<button>Buy</button>
			</div>
			<div onClick={props.addToBag} className="btnAddCart">
				<button>Add to bag</button>
			</div>
		</div>
	)
})

export default BtnsBuy