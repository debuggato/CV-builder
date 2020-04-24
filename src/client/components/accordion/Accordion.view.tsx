import React, { FC, useState, ReactNode, ReactElement } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import trans from '@client/i18n';
import IconView from '@components/Icon.view';
import { Container, Header, Title, Dates } from './Accordion.style';

interface Props {
  title?: string;
  children: ReactNode;
}

const Accordion: FC<Props> = ({ title, children }: Props): ReactElement => {
  let [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <Container>
      <Header onClick={() => setCollapsed(!collapsed)}>
        <Title>
          {title ? title : trans.t('not_specified')}
        </Title>
        <Dates></Dates>
        <IconView icon={collapsed ? faChevronDown : faChevronUp} />
      </Header>
      {!collapsed &&
        <div>{children}</div>
      }
    </Container>
  );
}

export default Accordion;
