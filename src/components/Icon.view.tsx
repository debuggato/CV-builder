import React, { FC, CSSProperties } from 'react';

interface Props {
  icon: string;
  style?: CSSProperties;
}

const Icon: FC<Props> = props => {
  return (
    <>
      <i className={`ion-md-${props.icon}`} style={props.style} />
    </>
  );
};

export default Icon;
