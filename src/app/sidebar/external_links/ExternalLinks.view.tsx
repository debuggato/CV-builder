import React, { FC, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';

import { Wrapper } from './ExternalLinks.style';

interface Props {
  //onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ExternalLinksView: FC<Props> = props => {
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Label"
        />
      </Wrapper>
      <Wrapper>
        <Input type="text" label="Link" />
      </Wrapper>
    </>
  );
};

export default ExternalLinksView;
