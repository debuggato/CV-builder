import React, { FC, ChangeEvent, Fragment } from 'react';

import Input from '../../../components/input/Input.view';

import { Wrapper } from './ExternalLinks.style';

interface Props {
  onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ExternalLinksView: FC<Props> = props => {
  return (
    <Fragment>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Label"
          name="label"
          onChange={props.onTitleSectionChange}
        />
      </Wrapper>
      <Wrapper>
        <Input type="text" withLabel={true} label="Link" name="link" />
      </Wrapper>
    </Fragment>
  );
};

export default ExternalLinksView;
