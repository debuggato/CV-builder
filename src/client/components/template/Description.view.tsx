import React, { FC, ReactElement } from 'react';
import trans from '@client/i18n';

interface Props {
  label: string;
  text: string;
}

const Description: FC<Props> = ({ label, text }: Props): ReactElement => {
  return (
    <>
      <h4>{trans.t(label)}</h4>
      <p dangerouslySetInnerHTML={{ __html: text }} ></p>
    </>
  );
}

export default Description;
