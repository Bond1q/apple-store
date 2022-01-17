import React from 'react';
import { useState } from 'react';
import { isRealCityCountry } from '../../api/api';
import InputInfo from './InputInfo';

const UserInfo = ({ setActive }) => {

	const increaseCount = () => {
		if (count !== 6) {
			setCount((prev) => prev + 1)
		}
	}



	const onEmailValidation = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		const isValid = !re.test(email)
		setIsEmailError(isValid)
		!isValid ? increaseCount() : console.log()
	}

	const onPhoneNumberValidation = (number) => {
		const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
		const isValid = !re.test(number)
		setIsPhoneNumError(isValid)
		!isValid ? increaseCount() : console.log()

	}

	const onNameValidation = (name) => {
		if (name === '') {
			setIsNameError(true)
		} else {
			setIsNameError(false)
			increaseCount()
		}
	}

	const onSurnameValidation = (surName) => {
		if (surName === '') {
			setIsSurNameError(true)
		} else {
			setIsSurNameError(false)
			increaseCount()

		}

	}

	const onCountryValidation = async (country) => {
		const answer = await isRealCityCountry(country, '')
		setIsCountryError(!answer)
		if (answer) {
			increaseCount()
		}
	}
	const onCityValidation = async (city) => {
		const answer = await isRealCityCountry('', city)
		setIsCityError(!answer)
		if (answer) {
			increaseCount()
		}
	}

	const isAllInputsValid = () => {
		console.log(count);
		if (!isEmailError && !isPhoneNumError && !isNameError && !isSurNameError && !isCountryError && !isCityError) {
			if (count === 6)
				setActive()
		}
	}




	const [isEmailError, setIsEmailError] = useState(false)
	const [isPhoneNumError, setIsPhoneNumError] = useState(false)
	const [isNameError, setIsNameError] = useState(false)
	const [isSurNameError, setIsSurNameError] = useState(false)
	const [isCountryError, setIsCountryError] = useState(false)
	const [isCityError, setIsCityError] = useState(false)
	const [count, setCount] = useState(0)


	return (
		<div className='userInfo'>
			<InputInfo isError={isNameError} validation={onNameValidation} inputType={'Name'} />
			<InputInfo isError={isSurNameError} validation={onSurnameValidation} inputType={'Surname'} />
			<InputInfo isError={isEmailError} validation={onEmailValidation} inputType={'Email'} />
			<InputInfo isError={isPhoneNumError} validation={onPhoneNumberValidation} inputType={'Number'} />
			<InputInfo isError={isCountryError} validation={onCountryValidation} inputType={'Country'} />
			<InputInfo isError={isCityError} validation={onCityValidation} inputType={'City'} />
			<div onClick={isAllInputsValid} className='confirmedBtn'>
				<button>Order confirmed</button>
			</div>
		</div>
	);
};

export default UserInfo;