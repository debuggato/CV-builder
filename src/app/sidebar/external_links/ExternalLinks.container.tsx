import React, { Component, ReactNode } from 'react';

import i18n from '../../../i18n';

import Title from '../../../components/Title.view';
import Subtitle from '../../../components/Subtitle.view';
import Button from '../../../components/buttons/Button.view';
import Details from '../accordion_details/AccordionDetails.container';
import { addBlock } from '../../utils/utils';
import { Container } from './ExternalLinks.style';

type State = {
  rows: number[];
  clicks: number;
};

interface Props {
  currentStep: number;
}

export default class ExternalLinks extends Component<Props, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  externalLinkStructureData = {}

  renderBlock = (): JSX.Element[] => {
    return this.state.rows.map((index, el) => {
      return <Details context="external_links" key={el} id={el} />;
    });
  };

  addExternalLinksBlock = () => {
    addBlock(this, this.externalLinkStructureData);
  };

  public render(): ReactNode {
    if (this.props.currentStep !== 6) {
      return null;
    }

    return (
      <Container>
        <Title>{i18n.t('websites_social_links')}</Title>
        <Subtitle>{i18n.t('website_sicial_links_subtitle')}</Subtitle>
        {this.renderBlock()}
        <Button type="button" isLink={true} onClick={this.addExternalLinksBlock} color="primary">
          {i18n.t('add_link')}
        </Button>
      </Container>
    );
  }
}
