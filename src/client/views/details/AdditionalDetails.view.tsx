import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from '../../store/actions/Details.action';
import Input from '../../components/input';
import Datepicker from '../../components/datepicker/Datepicker.view';
import { Wrapper } from './Details.style';

interface StateProps {
	city: string;
	postalCode: string;
	country: string;
	address: string;
	drivingLicense: string;
	nationality: string;
	placeOfBirth: string;
	dateOfBirth: string;
}

interface DispatchProps {
	setAddress: (arg0: string) => void;
	setCity: (arg0: string) => void;
	setCountry: (arg0: string) => void;
	setDateOfBirth: (arg0: Date) => void;
	setDrivingLicense: (arg0: string) => void;
	setNationality: (arg0: string) => void;
	setPlaceOfBirth: (arg0: string) => void;
	setPostalCode: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

const AdditionalDetails: FC<Props> = (props: Props): ReactElement => {
	const {
		city,
		postalCode,
		country,
		address,
		drivingLicense,
		nationality,
		placeOfBirth,
		dateOfBirth,
		setAddress,
		setCity,
		setCountry,
		setDateOfBirth,
		setDrivingLicense,
		setNationality,
		setPlaceOfBirth,
		setPostalCode
	} = props;

	return (
		<>
			<Wrapper>
				<Input
					label="Address"
					onChange={e => setAddress(e.target.value)}
					value={address}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="City"
					onChange={e => setCity(e.target.value)}
					value={city}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Postal code"
					onChange={e => setPostalCode(e.target.value)}
					value={postalCode + ''}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Country"
					onChange={e => setCountry(e.target.value)}
					value={country}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Driving License"
					onChange={e => setDrivingLicense(e.target.value)}
					value={drivingLicense}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Nationality"
					onChange={e => setNationality(e.target.value)}
					value={nationality}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Place of birth"
					onChange={e => setPlaceOfBirth(e.target.value)}
					value={placeOfBirth}
				/>
			</Wrapper>
			<Wrapper>
				<Datepicker
					label="Date of birth"
					value={dateOfBirth}
					onChange={(date: any) => setDateOfBirth(date)}
				/>
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: any): StateProps => {

	const {
		city,
		postalCode,
		country,
		address,
		drivingLicense,
		nationality,
		placeOfBirth,
		dateOfBirth
	} = state.details;

	return {
		city,
		postalCode,
		country,
		address,
		drivingLicense,
		nationality,
		placeOfBirth,
		dateOfBirth
	}
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	setCity: (value: string) => {
		dispatch(action.cityAction(value));
	},
	setCountry: (value: string) => {
		dispatch(action.countryAction(value));
	},
	setAddress: (value: string) => {
		dispatch(action.addressAction(value));
	},
	setPostalCode: (value: string) => {
		dispatch(action.postalCodeAction(value));
	},
	setDrivingLicense: (value: string) => {
		dispatch(action.drivingLicenseAction(value));
	},
	setNationality: (value: string) => {
		dispatch(action.nationalityAction(value));
	},
	setPlaceOfBirth: (value: string) => {
		dispatch(action.placeOfBirthAction(value));
	},
	setDateOfBirth: (value: Date) => {
		dispatch(action.dateOfBirthAction(value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalDetails);
