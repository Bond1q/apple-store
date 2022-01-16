import React from 'react'
import '../styles/modal.scss'

const ModalWindow = ({ active, setActive, children, mustBeStatic }) => {

	return (
		<div className={active ? 'modal active' : 'modal'} onClick={!mustBeStatic ? () => setActive(false) : console.log()}>
			<div className={active ? 'modalContent active' : 'modalContent'}>
				{mustBeStatic && <div onClick={() => setActive(false)} className='closeModal'>×</div>}

				{children}
			</div>
		</div>
	)
}

export default ModalWindow
