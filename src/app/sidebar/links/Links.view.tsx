import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Input from 'components/input/Input.view';

import { Wrapper } from './Links.style';
import mapDispatchToProps from './duck/Links.dispatch';

interface OwnProps {
  id: number;
}

interface DispatchProps {
  setLink: (arg0: number, arg1: string) => void;
  setLabel: (arg0: number, arg1: string) => void;
}

type Props = OwnProps & DispatchProps;

const LinksView: FC<Props> = ({ id, setLabel, setLink }: Props): ReactElement => {
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Label"
          onChange={e => setLabel(id, e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Link"
          onChange={e => setLink(id, e.target.value)}
        />
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(LinksView);
