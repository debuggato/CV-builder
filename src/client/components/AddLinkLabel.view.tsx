import React, { ReactElement, FC, ReactNode } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/button';
import IconView from '../components/Icon.view';

interface Props {
	onClick: () => void;
	children: ReactNode;
}

const AddLinkLabelView: FC<Props> = ({ onClick, children }: Props): ReactElement => {
	return (
		<Button linkStyle onClick={onClick} primary>
			<IconView icon={faPlus} /> {children}
		</Button>
	);
};

export default AddLinkLabelView;
