import React, { FC, ReactElement } from 'react';

import Input from '../input/Input.view';
import Icon from '../Icon.view';
import i18n from '../../i18n';

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
          <Icon icon="contact" />
        </IconContainer>

        <label htmlFor="upload">
          <UploadLabel>
            <Icon icon="image" style={iconStyle}></Icon>
            {i18n.t('upload_photo')}
          </UploadLabel>
          <Input type="file" id="upload" />
        </label>
      </Wrapper>
    </Container>
  );
};

export default Photo;
