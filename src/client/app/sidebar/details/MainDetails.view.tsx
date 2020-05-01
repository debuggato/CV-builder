import React, { FC, ReactElement, SyntheticEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from './duck/Details.actions';
import Photo from '@components/photo/Photo.view';
import Input from '@components/input/Input.view';
import { Wrapper } from './Details.style';

interface StateProps {
  jobTitle: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  photo: string;
}

interface DispatchProps {
  setJobTitle: (arg0: string) => void;
  setFirstName: (arg0: string) => void;
  setLastName: (arg0: string) => void;
  setPhone: (arg0: string) => void;
  setEmail: (arg0: string) => void;
  setPhoto: (e: ChangeEvent<SyntheticEvent>) => void;
}

type Props = StateProps & DispatchProps;

const MainDetails: FC<Props> = (props: Props): ReactElement => {
  const {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    photo,
    setJobTitle,
    setFirstName,
    setLastName,
    setPhone,
    setEmail,
    setPhoto
  } = props;

  return (
    <>
      <Photo
        onUpload={e => setPhoto(e)}
        imgUrl={photo}
      />
      <Wrapper>
        <Input
          label="Job Title"
          onChange={e => setJobTitle(e.target.value)}
          value={jobTitle}
        />
      </Wrapper>
      <Wrapper>
        <Input
          label="First Name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />
      </Wrapper>
      <Wrapper>
        <Input
          label="Last Name"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />
      </Wrapper>
      <Wrapper>
        <Input
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

  const { jobTitle, firstName, lastName, phone, email, photo } = state.details;

  return {
    jobTitle,
    firstName,
    lastName,
    phone,
    email,
    photo
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setPhoto: (value: any) => {
    dispatch(action.onPhotoStartAction(value));
  },
  setJobTitle: (value: string) => {
    dispatch(action.jobTitleAction(value));
  },
  setFirstName: (value: string) => {
    dispatch(action.firstnameAction(value));
  },
  setLastName: (value: string) => {
    dispatch(action.lastnameAction(value));
  },
  setEmail: (value: string) => {
    dispatch(action.emailAction(value));
  },
  setPhone: (value: string) => {
    dispatch(action.phoneAction(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDetails);
