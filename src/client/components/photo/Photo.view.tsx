import React, { FC, ReactElement } from 'react';
import { faUser, faUpload } from '@fortawesome/free-solid-svg-icons';

import Input from '../input/Input.view';
import trans from '@client/i18n';

import IconView from '@components/Icon.view';
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
          <IconView icon={faUser} />
        </IconContainer>

        <label htmlFor="upload">
          <UploadLabel>
            <IconView icon={faUpload} style={iconStyle} />
            {trans.t('upload_photo')}
          </UploadLabel>
          <Input type="file" id="upload" />
        </label>
      </Wrapper>
    </Container>
  );
};

export default Photo;
