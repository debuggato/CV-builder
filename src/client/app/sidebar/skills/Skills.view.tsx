import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Input from '@components/input/Input.view';
import { Wrapper } from './Skills.style';
import mapDispatchToProps from './duck/Skills.dispatch';

interface OwnProps {
  id: number;
}

interface DispatchProps {
  setName: (arg0: number, arg1: string) => void;
  setLevel: (arg0: number, arg1: string) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const SkillsView: FC<Props> = ({ id, setName, setLevel, items }: Props): ReactElement => {
  const { skill, level } = items[id];
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Skill"
          onChange={e => setName(id, e.target.value)}
          value={skill}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Level"
          onChange={e => setLevel(id, e.target.value)}
          value={level}
        />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  items: state.skills
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsView);
