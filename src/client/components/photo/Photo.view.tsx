import React, { FC, ReactElement } from 'react';
import { faUser, faUpload } from '@fortawesome/free-solid-svg-icons';

import Input from '@components/input/Input.view';
import trans from '@client/i18n';

import IconView from '@components/Icon.view';
import { Container, Wrapper, IconContainer, UploadLabel } from './Photo.style';

const iconStyle = {
  marginRight: '10px',
};

interface Props {
  onUpload: (e: any) => void;
  imgUrl?: string;
}

const Photo: FC<Props> = ({ onUpload, imgUrl }: Props): ReactElement => {
  return (
    <Container>
      <Wrapper>
        {imgUrl && <img src={imgUrl} style={{ width: '100px', marginRight: '10px' }} />}
        {!imgUrl &&
          <IconContainer>
            <IconView icon={faUser} />
          </IconContainer>
        }

        <label htmlFor="upload">
          <UploadLabel>
            <IconView icon={faUpload} style={iconStyle} />
            {trans.t('upload_photo')}
          </UploadLabel>
          <Input type="file" id="upload" onChange={e => onUpload(e)} />
        </label>
      </Wrapper>
    </Container>
  );
};

export default Photo;
