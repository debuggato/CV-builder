import React, { FC } from 'react';

import i18n from '../../i18n';

import Props from './Loader.model';
import { Loader, Container } from './Loader.style';

const LoaderView: FC<Props> = props => {
  let label: string = '';

  if (label) {
    if (props.success) {
      label = i18n.t('saved');
    } else if (props.error) {
      label = i18n.t('error_save');
    } else if (props.loading) {
      label = i18n.t('saving');
    }
  }

  return <Container>{label ? <label>{label}</label> : null}</Container>;
};

export default LoaderView;
