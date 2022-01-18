import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';

const InputInfo = ({ inputType, validation, isError, inputValue, id }) => {
	const [inputActiceValue, setInputValue] = useState(inputValue)
	const onInputChange = (e) => {
		setInputValue(e.target.value)
	}



	return (
		<div onBlur={() => validation(inputActiceValue, id)} className={classNames('inputInfo', { 'error': isError })}>
			<input placeholder={inputType} onChange={(e) => onInputChange(e)} value={inputActiceValue} type="text" />
		</div>
	);
};

export default InputInfo;