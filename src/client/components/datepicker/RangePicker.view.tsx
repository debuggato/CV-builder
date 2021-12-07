import React, { FC, useState, ReactElement } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FieldLabel from '../../components/FieldLabel.view';
import { Wrapper, Container } from './Datepicker.style';

type Props = {
	label: string;
	onChangeDateFrom: (arg0: Date) => void;
	onChangeDateTo: (arg0: Date) => void;
}

const FromToDate: FC<Props> = (props: Props): ReactElement => {
	const { label, onChangeDateFrom, onChangeDateTo } = props;
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const onSetDateFrom = (date: Date) => {
		setStartDate(date);
		onChangeDateFrom(date);
	}

	const onSetDateTo = (date: Date) => {
		setEndDate(date);
		onChangeDateTo(date);
	}

	// Disable user manual edit
	const handleDateChangeRaw = (e: any) => {
		e.preventDefault();
	}

	return (
		<Container>
			<FieldLabel value={label} />
			<Wrapper>
				<DatePicker
					selected={startDate}
					onChange={(date: Date) => onSetDateFrom(date)}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					dateFormat="MM-yyyy"
					showMonthYearPicker
					onChangeRaw={handleDateChangeRaw}
				/>
				<DatePicker
					selected={endDate}
					onChange={(date: Date) => onSetDateTo(date)}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					dateFormat="MM-yyyy"
					showMonthYearPicker
					popperPlacement="bottom-end"
					onChangeRaw={handleDateChangeRaw}
				/>
			</Wrapper>
		</Container>
	);
}

export default FromToDate;
