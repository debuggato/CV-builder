import React, { FC, ReactElement } from 'react';

import trans from '@client/i18n';

import Props from './Loader.model';
import { Container } from './Loader.style';

//TODO refactoring
const LoaderView: FC<Props> = ({ error, loading, success }: Props): ReactElement => {
  let label: string = '';

  if (label) {
    if (success) {
      label = trans.t('saved');
    } else if (error) {
      label = trans.t('error_save');
    } else if (loading) {
      label = trans.t('saving');
    }
  }

  return <Container>{label ? <label>{label}</label> : null}</Container>;
};

export default LoaderView;
