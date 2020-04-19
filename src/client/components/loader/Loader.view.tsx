import React, { FC, ReactElement } from 'react';

import { Wrapper, Content } from './Loader.style';

interface Props {
  text?: string;
}

const Loader: FC<Props> = ({ text }: Props): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
        <p>{text}</p>
      </Content>
    </Wrapper>
  );
}

export default Loader;
