import React, { FC, useState, ReactNode, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import i18n from '../../i18n';

import { Container, Header, Title, Dates } from './Accordion.style';

interface Props {
  title?: string;
  children: ReactNode;
};

const Accordion: FC<Props> = ({ title, children }: Props): ReactElement => {
  let [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <Container>
      <Header onClick={() => setCollapsed(!collapsed)}>
        <Title>
          {title ? title : i18n.t('not_specified')}
        </Title>
        <Dates></Dates>
        <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
      </Header>
      {!collapsed &&
        <div>{children}</div>
      }
    </Container>
  );
}

export default Accordion;
