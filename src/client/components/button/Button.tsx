import React, { FC, ReactNode, ReactElement } from 'react';
import cn from 'classnames';
import './Button.css';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';

type styleProps = typeof PRIMARY | typeof SECONDARY;

type Props = {
	onClick?: () => void;
	style?: styleProps;
	secondary?: boolean;
	type?: 'submit' | 'button' | 'reset';
	disabled?: boolean;
	children?: ReactNode;
}

const Button: FC<Props> & {
	PRIMARY: any,
	SECONDARY: any
} = ({
	type,
	children,
	onClick,
	style,
	...rest
}: Props): ReactElement => {

		const css = cn({
			btn: true,
			btn__primary: style === PRIMARY,
			btn__secondary: style === SECONDARY,
		});

		return (
			<button
				onClick={onClick}
				className={`btn ${css}`}
				type={type}
				{...rest}
			>
				{children}
			</button>
		)
	};

Button.PRIMARY = PRIMARY;
Button.SECONDARY = SECONDARY;

Button.defaultProps = {
	type: "button",
	style: SECONDARY
}

export default Button;
