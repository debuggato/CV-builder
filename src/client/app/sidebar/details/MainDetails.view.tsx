import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import config from '@config/config';
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
  photo: string;
}

interface DispatchProps {
  setJobTitle: (arg0: string) => void;
  setFirstName: (arg0: string) => void;
  setLastName: (arg0: string) => void;
  setPhone: (arg0: string) => void;
  setEmail: (arg0: string) => void;
  setPhoto: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

const onUploadPhoto = (e: any, setPhoto: any) => {
  const data = new FormData()

  data.append('file', e.target.files[0]);

  axios.post(config.upload, data)
    .then(result => {
      setPhoto(`/assets/photo_profile.jpg`);
    });
}

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
        onUpload={e => onUploadPhoto(e, setPhoto)}
        imgUrl={photo}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainDetails);
