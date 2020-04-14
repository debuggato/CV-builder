import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUpload } from '@fortawesome/free-solid-svg-icons';

import Input from '../input/Input.view';
import i18n from '@client/i18n';

import { Container, Wrapper, IconContainer, UploadLabel } from './Photo.style';

const iconStyle = {
  marginRight: '10px',
};

const Photo: FC = (): ReactElement => {
  return (
    <Container>
      <Wrapper>
        <img src="" alt="" />
        <IconContainer>
          <FontAwesomeIcon icon={faUser} />
        </IconContainer>

        <label htmlFor="upload">
          <UploadLabel>
            <FontAwesomeIcon icon={faUpload} style={iconStyle} />
            {i18n.t('upload_photo')}
          </UploadLabel>
          <Input type="file" id="upload" />
        </label>
      </Wrapper>
    </Container>
  );
};

export default Photo;
