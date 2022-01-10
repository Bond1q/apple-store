import React from 'react'
import { NavLink } from 'react-router-dom'

function NotOnWarehouse({ category }) {

	return (
		<div className='notAvailible'>
			Sorry, but there are no {category} left in the warehouse
			<div className='back'>
				<NavLink to='/iphones'><button>← Back</button></NavLink>
			</div>
		</div>
	)
}

export default NotOnWarehouse
