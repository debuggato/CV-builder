import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import trans from '@client/i18n';

interface Props {
  label: string;
  summary: string;
}

const Text = styled.p``;

const Title = styled.h4``;

const Description: FC<Props> = ({ label, summary }: Props): ReactElement => {
  return (
    <>
      <Title>{trans.t(label)}</Title>
      <Text dangerouslySetInnerHTML={{ __html: summary }} />
    </>
  );
}

export default Description;
