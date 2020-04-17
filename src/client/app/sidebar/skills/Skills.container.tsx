import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import trans from '@client/i18n';

import Title from '@components/Title.view';
import AddLinkLabel from '@components/AddLinkLabel.view';
import Accordion from '@components/accordion/Accordion.view';

import { Container } from './Skills.style';
import SkillsView from './Skills.view';

import mapDispatchToProps from './duck/Skills.dispatch';
import { JsxSelfClosingElement } from 'typescript';

interface OwnProps {
  currentStep: number;
  addSkill: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

interface State {
  id: number;
};

type Props = OwnProps & StateProps;

class Skills extends Component<Props, State> {
  state = {
    id: 0
  };

  skillInitialData = {
    name: null,
    level: null
  }

  addItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addSkill(this.state.id, this.skillInitialData);
  };

  public render(): ReactNode {
    const { currentStep, items } = this.props;

    if (currentStep !== 5) return null;

    const item = items.map((el: any) => {
      return (
        <Accordion key={el[0]} title={el[1].name}>
          <SkillsView id={el[0]} />
        </Accordion>
      )
    });

    return (
      <Container>
        <Title>{trans.t('skills')}</Title>
        {item}
        <AddLinkLabel onClick={this.addItem}>
          {trans.t('add_skill')}
        </AddLinkLabel>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: Object.entries(state.skills)
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
