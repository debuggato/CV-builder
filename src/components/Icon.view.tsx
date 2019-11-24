import React, { Fragment, FC, CSSProperties } from 'react';

type Props = {
  icon: string;
  style?: CSSProperties;
};

const Icon: FC<Props> = props => {
  return (
    <Fragment>
      <i className={`ion-md-${props.icon}`} style={props.style} />
    </Fragment>
  );
};

export default Icon;
