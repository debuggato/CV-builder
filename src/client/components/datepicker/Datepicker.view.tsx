import React, { FC, ReactElement, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FieldLabel from '../../components/FieldLabel.view';
import { Wrapper, Container } from './Datepicker.style';
import ErrorBoundary from '../../components/ErrorBoundary';

interface Props {
	value: string;
	label: string;
	onChange: (date: Date) => void;
}

//const DatepickerCustom = InputStyle.withComponent(DatePicker);

const Datepicker: FC<Props> = ({ label, onChange, value }: Props): ReactElement => {
	const [startDate, setStartDate] = useState(new Date());

	const onSetDate = (date: Date) => {
		setStartDate(date)
		onChange(date);
	}

	// Disable user manual edit
	const handleDateChangeRaw = (e: any) => {
		e.preventDefault();
	}

	return (
		<ErrorBoundary>
			<Container>
				<FieldLabel value={label} />
				<Wrapper>
					{/* <DatepickerCustom
						showPopperArrow={false}
						selected={startDate}
						onChange={(date: Date) => onSetDate(date)}
						dateFormat="dd-MM-yyyy"
						showMonthDropdown
						showYearDropdown
						onChangeRaw={handleDateChangeRaw}
					/> */}
				</Wrapper>
			</Container>
		</ErrorBoundary>
	);
};

export default Datepicker;
