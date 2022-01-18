import React from 'react';
import { useState } from 'react';
import { isRealCityCountry } from '../../api/api';
import InputInfo from './InputInfo';

const UserInfo = ({ setActive }) => {
	const [inputs, setInputs] = useState([
		{ inputType: 'Name', isError: false, inputValue: '', id: 0 },
		{ inputType: 'Surname', isError: false, inputValue: '', id: 1 },
		{ inputType: 'Email', isError: false, inputValue: '', id: 2 },
		{ inputType: 'Number', isError: false, inputValue: '', id: 3 },
		{ inputType: 'Country', isError: false, inputValue: '', id: 4 },
		{ inputType: 'City', isError: false, inputValue: '', id: 5 },
	])


	const onNameValidation = (name, id) => {
		const isValid = name.trim() !== ''
		setInputs(prev => prev.map(input => {
			if (input.id === id) {
				input.isError = !isValid
				input.inputValue = name
			}
			return input
		}))
	}


	const onEmailValidation = (email, id) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		const isValid = re.test(email)
		setInputs(prev => prev.map(input => {
			if (input.id === id) {
				input.isError = !isValid
				input.inputValue = email
			}
			return input
		}))
	}

	const onPhoneNumberValidation = (number, id) => {
		const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
		const isValid = re.test(number)
		setInputs(prev => prev.map(input => {
			if (input.id === id) {
				input.isError = !isValid
				input.inputValue = number
			}
			return input
		}))

	}

	const onPlaceValidation = async (place, id) => {
		const cityId = 5
		const countryId = 4
		let isValid = place.trim() !== ''

		setInputs(prev => prev.map(input => {
			if (input.id === id) {
				input.isError = !isValid
				input.inputValue = place
			}
			return input
		}))

		const getPlace = async (countryId, cityId) => {
			const country = inputs[countryId].inputValue
			const city = inputs[cityId].inputValue
			if (country !== '' && city !== '') {
				const answer = await isRealCityCountry(country, city)
				return answer
			}
			return null
		}

		isValid = await getPlace(countryId, cityId)
		if (isValid !== null) {
			setInputs(prev => prev.map(input => {
				if (input.id === cityId || input.id === countryId) {
					input.isError = !isValid
				}
				return input
			}))

		}
	}

	const onInputValidation = (inputValue, id) => {
		switch (id) {
			case 0:
				onNameValidation(inputValue, id)
				break;
			case 1:
				onNameValidation(inputValue, id)
				break;
			case 2:
				onEmailValidation(inputValue, id)
				break;
			case 3:
				onPhoneNumberValidation(inputValue, id)
				break;
			case 4:
				onPlaceValidation(inputValue, id)
				break;
			case 5:
				onPlaceValidation(inputValue, id)
				break;
			default:
				break;
		}
	}

	const isAllInputsValid = () => {
		let isReady = true
		inputs.forEach(input => {
			if (input.isError === true || input.inputValue.trim() === '') {
				isReady = false
			}
		})
		if (isReady) {
			setActive()
		}

	}
	return (
		<div className='userInfo'>
			{inputs.map(input => {
				return <InputInfo isError={input.isError}
					key={input.id}
					validation={onInputValidation}
					inputType={input.inputType}
					inputValue={input.inputValue}
					id={input.id}
				/>
			})}
			<div onClick={isAllInputsValid} className='confirmedBtn'>
				<button>Order confirmed</button>
			</div>
		</div>
	);
};

export default UserInfo;