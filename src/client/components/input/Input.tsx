import React, { FC, ChangeEvent, ReactElement } from 'react';
import FieldLabel from '../FieldLabel.view';
import './Input.css';

type Props = {
	type?: string;
	label?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

const Input: FC<Props> = ({
	label,
	value,
	type,
	onChange
}: Props): ReactElement => (
	<>
		{label && <FieldLabel value={label} />}
		<input
			onChange={onChange}
			className="input"
			type={type}
			value={value}
		/>
	</>
)

Input.defaultProps = {
	type: 'text'
}

export default Input;
