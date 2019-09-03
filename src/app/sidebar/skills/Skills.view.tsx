import React, { FC, Fragment, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view'
import { Wrapper } from './Skills.style'

type Props = {
  onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SkillsView: FC<Props> = props => {
  return (
    <Fragment>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Skill"
          name="skill"
          onChange={ props.onTitleSectionChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Level"
          name="level"
        />
      </Wrapper>
    </Fragment>
  )
}

export default SkillsView
