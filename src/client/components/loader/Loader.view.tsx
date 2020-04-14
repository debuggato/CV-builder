import React, { FC, ReactElement } from 'react';

import i18n from '@client/i18n';

import Props from './Loader.model';
import { Container } from './Loader.style';

//TODO refactoring
const LoaderView: FC<Props> = ({ error, loading, success }: Props): ReactElement => {
  let label: string = '';

  if (label) {
    if (success) {
      label = i18n.t('saved');
    } else if (error) {
      label = i18n.t('error_save');
    } else if (loading) {
      label = i18n.t('saving');
    }
  }

  return <Container>{label ? <label>{label}</label> : null}</Container>;
};

export default LoaderView;
