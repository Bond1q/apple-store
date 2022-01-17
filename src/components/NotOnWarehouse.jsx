import React from 'react'
import { useHistory } from 'react-router-dom'

function NotOnWarehouse({ category }) {
	const history = useHistory()
	return (
		<div className='notAvailible'>
			Sorry, but there are no {category} left in the warehouse
			<div className='back'>
				<button onClick={() => history.goBack()}>← Back</button>
			</div>
		</div>
	)
}

export default NotOnWarehouse
