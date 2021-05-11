import React, { FC, ReactElement } from 'react';
import { Dispatch } from 'redux';
import Input from '../../components/input';
import useDataFromState from '../../utils/useDataFromState';
import { Wrapper } from './Links.style';
import * as action from '../../store/actions/Links.action';
import { useDispatch } from 'react-redux';

type Props = {
	id: number;
}

const LinksView: FC<Props> = ({ id }: Props): ReactElement => {
	const setLink = useDispatch<Dispatch>();
	const setLabel = useDispatch<Dispatch>();
	const { label, link } = useDataFromState('links')[id];

	return (
		<>
			<Wrapper>
				<Input
					type="text"
					label="Label"
					onChange={e => setLabel(action.labelAction(id, e.target.value))}
					value={label}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					label="Link"
					onChange={e => setLink(action.linkAction(id, e.target.value))}
					value={link}
				/>
			</Wrapper>
		</>
	)
}

export default LinksView;
