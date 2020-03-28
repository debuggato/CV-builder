import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Input from 'components/input/Input.view';
import { Wrapper } from './Skills.style';
import mapDispatchToProps from './duck/Skills.dispatch';

interface OwnProps {
  id: number;
}

interface DispatchProps {
  setName: (arg0: number, arg1: string) => void;
  setLevel: (arg0: number, arg1: string) => void;
}

type Props = OwnProps & DispatchProps;

const SkillsView: FC<Props> = ({ id, setName, setLevel }: Props): ReactElement => {
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Skill"
          onChange={e => setName(id, e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Level"
          onChange={e => setLevel(id, e.target.value)}
        />
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(SkillsView);
