import React, { FC, ChangeEvent, ReactElement } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Select.css';
import Icon from '../Icon';

type Props = {
	list: Object;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	customClass?: string;
}

const iconStyle = {
	position: 'absolute',
	right: '5px'
}

const Select: FC<Props> = ({
	list,
	onChange,
	customClass
}: Props): ReactElement => {

	const items = Object.values(list).map((obj, index) => (
		<option key={index} value={Object.keys(obj)}>{Object.values(obj)}</option>
	));

	return (
		<div className={`select__wrapper ${customClass}`}>
			<select
				onChange={onChange}
			>
				{items}
			</select>
			<Icon icon={faChevronDown} style={iconStyle} />
		</div>
	)
}

export default Select;
