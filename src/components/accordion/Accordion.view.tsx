import React, { FC, useState, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../i18n';
import { setCurrentAccordionId } from '../../genericState';

import Icon from '../Icon.view';

import { Container, Header, Title, Dates } from './Accordion.style';

interface Props {
  title?: string;
  id: string;
  children: ReactNode;
  setCurrentAccordionId: (arg0: string) => void
};

const Accordion: FC<Props> = props => {
  const { children, title, id, setCurrentAccordionId } = props;
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const clickHandler = (e: any) => {
    setCurrentAccordionId(e.currentTarget.id);
    setCollapsed(!collapsed);
  }

  return (
    <Container>
      <Header id={id} onClick={clickHandler}>
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentAccordionId: (id: string) => {
      dispatch(setCurrentAccordionId(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(Accordion);
