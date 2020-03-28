import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Title from 'components/Title.view';
import Subtitle from 'components/Subtitle.view';
import Button from 'components/buttons/Button.view';
import Accordion from 'components/accordion/Accordion.view';

import { Container } from './Links.style';
import LinksView from './Links.view';
import mapDispatchToProps from './duck/Links.dispatch';

interface OwnProps {
  currentStep: number;
}

interface DispatchProps {
  addLink: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State {
  id: number;
}

class Links extends Component<Props, State> {
  state = {
    id: 0
  };

  linksInitialData = {
    label: null,
    link: null
  }

  addItem = () => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addLink(this.state.id, this.linksInitialData);
  }

  public render(): ReactNode {
    const { currentStep, items } = this.props;

    if (currentStep !== 6) return null;

    const item = items.map((index: any) => {
      return (
        <Accordion key={index}>
          <LinksView id={index} />
        </Accordion>
      )
    });

    return (
      <Container>
        <Title>{i18n.t('websites_social_links')}</Title>
        <Subtitle>{i18n.t('website_social_links_subtitle')}</Subtitle>
        {item}
        <Button type="button" isLink={true} onClick={this.addItem} color="primary">
          {i18n.t('add_link')}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  let keys = Object.keys(state.links);

  return {
    items: keys
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);
