import React, { FC, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';

import DaVinci from '../../../server/davinci/DaVinci.view';
import Michelangelo from '../templates/michelangelo/Michelangelo.view';
import Raffaello from '../templates/raffaello/Raffaello.view';
import Donatello from '../templates/donatello/Donatello.view';
import Caravaggio from '../templates/caravaggio/Caravaggio.view';

import { Page } from './Resume.style';

interface StateProps {
  templateSelected: string | null;
}

const getTemplate = ({ templateSelected }: StateProps): ReactNode => {
  switch (templateSelected) {
    case '0':
      return <DaVinci />
    case '1':
      return <Michelangelo />
    case '2':
      return <Donatello />
    case '3':
      return <Raffaello />
    case '4':
      return <Caravaggio />
  }
}

const ResumeView: FC<StateProps> = (props: StateProps): ReactElement => {
  return (
    <Page>
      {getTemplate(props)}
    </Page>
  );
};

const mapStateToProps = (state: any) => ({
  templateSelected: state.generic.templateSelected
})

export default connect(mapStateToProps)(ResumeView);


