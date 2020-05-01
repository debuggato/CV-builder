import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface Props {
  label: string;
  text: string;
}

const Paragraph = styled.p`
  font-size: 13px;
`;

const Description: FC<Props> = ({ label, text }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <h4>{t(label)}</h4>
      <Paragraph dangerouslySetInnerHTML={{ __html: text }} ></Paragraph>
    </>
  );
}

export default Description;
