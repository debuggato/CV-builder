import React, { FC, ReactElement } from 'react';
import trans from '@client/i18n';
import { Content } from './Loader.style';

interface Props {
  keyLabel?: string;
}

const Loader: FC<Props> = ({ keyLabel }: Props): ReactElement => {
  return (
    <Content>
      {keyLabel && <p>{trans.t(keyLabel)}</p>}
      <div className="loader-fb-style"><div></div><div></div><div></div></div>
    </Content>
  );
}

export default Loader;
