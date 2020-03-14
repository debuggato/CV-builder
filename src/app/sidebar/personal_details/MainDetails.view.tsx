import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Photo from 'components/photo/Photo.view';
import Input from 'components/input/Input.view';

import { Wrapper } from './PersonalDetails.style';
import mapDispatchToProps from './duck/dispatch';
import { ReduxProps } from './duck/model';

const MainDetails: FC<ReduxProps> = (props: ReduxProps): ReactElement => {
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
