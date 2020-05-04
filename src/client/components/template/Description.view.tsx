import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import sizes from '@styles/sizes';
import { useTranslation } from 'react-i18next';

interface Props {
  label: string;
  text: string;
}

const Paragraph = styled.p`
  font-size: ${sizes.paragraph};
  line-height: ${sizes.lineHeight};
`;

const Title = styled.h4`
  font-size: ${sizes.h4};
  margin: 10px 0;
`;

const Description: FC<Props> = ({ label, text }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t(label)}</Title>
      <Paragraph dangerouslySetInnerHTML={{ __html: text }} ></Paragraph>
    </>
  );
}

export default Description;
