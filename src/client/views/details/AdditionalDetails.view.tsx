import React, { FC, ReactElement } from 'react';
import { Dispatch } from 'redux';
import * as action from '../../store/actions/Details.action';
import Input from '../../components/input';
import Datepicker from '../../components/datepicker/Datepicker.view';
import { Wrapper } from './Details.style';
import useDataFromState from '../../utils/useDataFromState';
import { useDispatch } from 'react-redux';

const AdditionalDetails: FC = (): ReactElement => {
	const {
		city,
		postalCode,
		country,
		address,
		drivingLicense,
		nationality,
		placeOfBirth,
		dateOfBirth
	} = useDataFromState('details');
	const setAddress = useDispatch<Dispatch>();
	const setCity = useDispatch<Dispatch>();
	const setCountry = useDispatch<Dispatch>();
	const setDateOfBirth = useDispatch<Dispatch>();
	const setDrivingLicense = useDispatch<Dispatch>();
	const setNationality = useDispatch<Dispatch>();
	const setPlaceOfBirth = useDispatch<Dispatch>();
	const setPostalCode = useDispatch<Dispatch>();

	return (
		<>
			<Wrapper>
				<Input
					label="Address"
					onChange={e => setAddress(action.addressAction(e.target.value))}
					value={address}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="City"
					onChange={e => setCity(action.cityAction(e.target.value))}
					value={city}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Postal code"
					onChange={e => setPostalCode(action.postalCodeAction(e.target.value))}
					value={postalCode + ''}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Country"
					onChange={e => setCountry(action.countryAction(e.target.value))}
					value={country}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Driving License"
					onChange={e => setDrivingLicense(action.drivingLicenseAction(e.target.value))}
					value={drivingLicense}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Nationality"
					onChange={e => setNationality(action.nationalityAction(e.target.value))}
					value={nationality}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Place of birth"
					onChange={e => setPlaceOfBirth(action.placeOfBirthAction(e.target.value))}
					value={placeOfBirth}
				/>
			</Wrapper>
			<Wrapper>
				<Datepicker
					label="Date of birth"
					value={dateOfBirth}
					onChange={(date: any) => setDateOfBirth(action.dateOfBirthAction(date))}
				/>
			</Wrapper>
		</>
	)
}

export default AdditionalDetails;
