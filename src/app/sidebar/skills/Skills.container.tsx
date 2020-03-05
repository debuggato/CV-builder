import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Title from '../../../components/Title.view';
import Details from '../accordion_details/AccordionDetails.container';
import Button from '../../../components/buttons/Button.view';
import { addBlock } from '../../utils/utils';

import { Container } from './Skills.style';
import mapDispatchToProps from './duck/dispatch';

interface Props {
  currentStep?: number;
  sendJobDescriptionToStore: (arg0: string) => void;
}

type State = {
  rows: number[];
  clicks: number;
};

class Skills extends Component<Props, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  skillsStructureData = {

  }

  renderBlock = (): JSX.Element[] => {
    return this.state.rows.map((index, el) => {
      return <Details context="skills" key={el} id={el} />;
    });
  };

  addExternalLinksBlock = () => {
    addBlock(this, this.skillsStructureData);
  };

  public render(): ReactNode {
    if (this.props.currentStep !== 5) {
      return null;
    }

    return (
      <Container>
        <Title>{i18n.t('skills')}</Title>
        {this.renderBlock()}
        <Button type="button" isLink={true} onClick={this.addExternalLinksBlock} color="primary">
          {i18n.t('add_skill')}
        </Button>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Skills);
