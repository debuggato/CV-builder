import React, { FC, ReactElement, ChangeEvent } from 'react';
import { faUser, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Input from '@components/input/Input.view';
import IconView from '@components/Icon.view';
import { Wrapper, IconContainer, UploadLabel } from './Photo.style';
import ErrorBoundary from '@components/ErrorBoundary';

const iconStyle = {
  marginRight: '10px',
};

interface Props {
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  imgUrl?: string;
}

const Photo: FC<Props> = ({ onUpload, imgUrl }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
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
            {t('upload.photo')}
          </UploadLabel>
          <Input type="file" id="upload" onChange={e => onUpload(e)} />
        </label>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Photo;
