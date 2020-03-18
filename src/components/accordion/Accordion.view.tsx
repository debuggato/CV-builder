import React, { FC, useState, ReactNode, ReactElement } from 'react';

import i18n from '../../i18n';
import Icon from '../Icon.view';

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
          <Icon icon={collapsed ? 'arrow-dropdown' : 'arrow-dropup'} />
        </Title>
        <Dates></Dates>
      </Header>
      {!collapsed &&
        <div>{children}</div>
      }
    </Container>
  );
}

export default Accordion;
