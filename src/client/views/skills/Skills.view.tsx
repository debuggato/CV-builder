import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Input from '../../components/input';
import { Wrapper } from './Skills.style';
import useDataFromState from '../../utils/useDataFromState';
import * as action from '../../store/actions/Skills.action';

type Props = {
	id: number;
}

const SkillsView: FC<Props> = ({
	id
}: Props): ReactElement => {
	const setName = useDispatch<Dispatch>();
	const setLevel = useDispatch<Dispatch>();
	const { skill, level } = useDataFromState('courses')[id];

	return (
		<>
			<Wrapper>
				<Input
					type="text"
					label="Skill"
					onChange={e => setName(action.nameAction(id, e.target.value))}
					value={skill}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					label="Level"
					onChange={e => setLevel(action.levelAction(id, e.target.value))}
					value={level}
				/>
			</Wrapper>
		</>
	);
}

export default SkillsView;
