import React, { FC, CSSProperties, ReactElement } from 'react';

interface Props {
  icon: string;
  style?: CSSProperties;
}

const Icon: FC<Props> = ({ icon, style }: Props): ReactElement => {
  return <i className={`ion-md-${icon}`} style={style} />
};

export default Icon;
