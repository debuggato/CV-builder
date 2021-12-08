import React, { ChangeEvent, ReactElement } from 'react';
import FieldLabel from '../FieldLabel.view';
import './Input.css';

type Props = {
	type?: string;
	label?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	id?: string;
	name?: string
}

const Input = ({
	label,
	value,
	type = 'text',
	onChange,
	id,
	name
}: Props): ReactElement => (
	<>
		{label && <FieldLabel value={label} />}
		<input
			name={name}
			id={id}
			onChange={onChange}
			className="input"
			type={type}
			value={value}
		/>
	</>
)

export default Input;
