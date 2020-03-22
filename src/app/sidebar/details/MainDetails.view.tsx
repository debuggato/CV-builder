import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Photo from 'components/photo/Photo.view';
import Input from 'components/input/Input.view';

import { Wrapper } from './Details.style';
import mapDispatchToProps from './duck/Details.dispatch';
import { StateProps } from './duck/Details.model';

const MainDetails: FC<StateProps> = (props: StateProps): ReactElement => {
  const {
    setJobTitle,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
  } = props;

  return (
    <>
      <Photo />
      <Wrapper>
        <Input
          type="text"
          label="Job Title"
          onChange={e => setJobTitle(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="First Name"
          onChange={e => setFirstName(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Last Name"
          onChange={e => setLastName(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Phone"
          onChange={e => setPhone(parseInt(e.target.value))}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="email"
          label="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(MainDetails);
