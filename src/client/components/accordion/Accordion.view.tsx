import React, { FC, useState, ReactNode, ReactElement } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import IconView from '@components/Icon.view';
import { Container, Header, Title, Dates } from './Accordion.style';

interface Props {
  title?: string;
  children: ReactNode;
}

const Accordion: FC<Props> = ({ title, children }: Props): ReactElement => {
  let [collapsed, setCollapsed] = useState<boolean>(true);
  const { t } = useTranslation();

  return (
    <Container>
      <Header onClick={() => setCollapsed(!collapsed)}>
        <Title>
          {title ? title : t('not.specified')}
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
