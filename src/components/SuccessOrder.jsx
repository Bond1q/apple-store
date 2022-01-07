import React from 'react'


const SuccessOrder = ({ active, setActive }) => {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			<div className={active ? 'modalContent active' : 'modalContent'}>
				Thank you for your purchase ❤
			</div>
		</div>
	)
}

export default SuccessOrder
