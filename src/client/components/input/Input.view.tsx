import React, { FC, CSSProperties, ChangeEvent, ReactElement } from 'react';
import FieldLabel from '../FieldLabel.view';
import './Input.css';

type Props = {
	type?: string;
	label?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
	style?: CSSProperties;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
	id?: string;
	text?: string;
	name?: string;
	ref?: any;
	className?: string;
}

const Input: FC<Props> = ({
	label,
	value,
	type,
	...props
}: Props): ReactElement => (
	<>
		{label && <FieldLabel value={label} />}
		<input
			{...props}
			className="input"
			type={type || 'text'}
			value={value}
		/>
	</>
)

export default Input;
