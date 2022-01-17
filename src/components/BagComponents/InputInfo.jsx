import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';

const InputInfo = ({ inputType, validation, isError }) => {
	const [inputValue, setInputValue] = useState('')
	const onInputChange = (e) => {
		setInputValue(e.target.value)
	}



	return (
		<div onBlur={() => validation(inputValue)} className={classNames('inputInfo', { 'error': isError })}>
			<input placeholder={inputType} onChange={(e) => onInputChange(e)} value={inputValue} type="text" />
		</div>
	);
};

export default InputInfo;