import React, { FC, ReactNode, ReactElement } from 'react';
import './Button.css';

export interface Props {
	onClick?: () => void;
	primary?: boolean;
	secondary?: boolean;
	type?: 'submit' | 'button' | 'reset';
	linkStyle?: boolean;
	disabled?: boolean;
	children?: ReactNode;
}

const Button: FC<Props> = ({
	type,
	children,
	...rest
}: Props): ReactElement => (
	<button
		className="btn"
		type={type || 'button'}
		{...rest}
	>
		{children}
	</button>
);

export default Button;
