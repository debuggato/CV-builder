import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Title from 'components/Title.view';
import Button from 'components/buttons/Button.view';
import Accordion from 'components/accordion/Accordion.view';

import { Container } from './Skills.style';
import SkillsView from '../skills/Skills.view';

import mapDispatchToProps from './duck/Skills.dispatch';

interface OwnProps {
  currentStep: number;
  addSkill: (arg0: number, arg1: any) => void;
}

interface State {
  id: number;
};

type Props = OwnProps & ReduxState;

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

    const item = items.map((index: any) => {
      return (
        <Accordion key={index}>
          <SkillsView id={index} />
        </Accordion>
      )
    });

    return (
      <Container>
        <Title>{i18n.t('skills')}</Title>
        {item}
        <Button type="button" isLink={true} onClick={this.addItem} color="primary">
          {i18n.t('add_skill')}
        </Button>
      </Container>
    );
  }
}

interface ReduxState {
  items: any;
  title: string;
}

const mapStateToProps = (state: any) => {
  let keys = Object.keys(state.skills);

  const { name } = state.skills;
  return {
    items: keys,
    title: name
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
