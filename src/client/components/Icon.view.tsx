import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Props {
  icon: IconDefinition;
  style?: object;
}

const Icon: FC<Props> = ({ icon, style }: Props): ReactElement => {
  return <FontAwesomeIcon icon={icon} style={style} />;
};

export default Icon;
