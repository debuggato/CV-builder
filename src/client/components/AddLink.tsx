import React, { ReactElement, FC, ReactNode } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from './button';
import Icon from './Icon';

type Props = {
	onClick: () => void;
	children: ReactNode;
}

const AddLink: FC<Props> = ({
	onClick,
	children
}: Props): ReactElement => (
	<Button onClick={onClick} style={Button.PRIMARY}>
		<Icon icon={faPlus} /> {children}
	</Button>
)

export default AddLink;
