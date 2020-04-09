import React, { ReactElement, FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '@components/buttons/Button.view';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const AddLinkLabelView: FC<Props> = ({ onClick, children }: Props): ReactElement => {
  return (
    <Button type="button" linkStyle onClick={onClick} primary>
      <FontAwesomeIcon icon={faPlus} /> {children}
    </Button>
  );
};

export default AddLinkLabelView;
