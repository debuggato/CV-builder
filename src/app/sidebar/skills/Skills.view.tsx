import React, { FC, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';
import { Wrapper } from './Skills.style';

interface Props {
  //onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SkillsView: FC<Props> = props => {
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Skill"
        />
      </Wrapper>
      <Wrapper>
        <Input type="text" label="Level" />
      </Wrapper>
    </>
  );
};

export default SkillsView;
