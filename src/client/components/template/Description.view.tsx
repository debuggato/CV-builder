import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  label: string;
  text: string;
}

const Description: FC<Props> = ({ label, text }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <h4>{t(label)}</h4>
      <p dangerouslySetInnerHTML={{ __html: text }} ></p>
    </>
  );
}

export default Description;
