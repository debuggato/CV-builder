import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Photo from '@components/photo/Photo.view';
import Input from '@components/input/Input.view';

import { Wrapper } from './Details.style';
import mapDispatchToProps from './duck/Details.dispatch';

interface StateProps {
  jobTitle: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

interface DispatchProps {
  setJobTitle: (arg0: string) => void;
  setFirstName: (arg0: string) => void;
  setLastName: (arg0: string) => void;
  setPhone: (arg0: string) => void;
  setEmail: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

const MainDetails: FC<Props> = (props: Props): ReactElement => {
  const {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    setJobTitle,
    setFirstName,
    setLastName,
    setPhone,
    setEmail
  } = props;

  return (
    <>
      <Photo />
      <Wrapper>
        <Input
          type="text"
          label="Job Title"
          onChange={e => setJobTitle(e.target.value)}
          value={jobTitle}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="First Name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Last Name"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Phone"
          onChange={e => setPhone(e.target.value)}
          value={phone + ''}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="email"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: any) => {

  const { jobTitle, firstName, lastName, phone, email } = state.details;

  return {
    jobTitle,
    firstName,
    lastName,
    phone,
    email
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDetails);
