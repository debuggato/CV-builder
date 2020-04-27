import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { addEmploymentAction } from './duck/Employment.actions';
import Title from '@components/Title.view';
import Subtitle from '@components/Subtitle.view';
import AddLinkLabel from '@components/AddLinkLabel.view';
import Accordion from '@components/accordion/Accordion.view';
import ErrorBoundary from '@components/ErrorBoundary';
import EmploymentView from './Employment.view';

interface OwnProps extends WithTranslation {
  currentStep: number;
}

interface DispatchProps {
  addEmployment: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

interface State {
  id: number;
}

const employmentInitialData: Object = {
  jobTitle: '',
  employer: '',
  city: '',
  startDate: new Date(),
  endDate: new Date(),
  description: ''
};

class Employment extends Component<Props, State> {
  state = {
    id: 0,
  };

  addEmploymentItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addEmployment(this.state.id, employmentInitialData);
  };

  getItems = (items: any): ReactNode => {
    return items.map((el: any) => {
      return (
        <Accordion key={el[0]} title={el[1].jobTitle}>
          <EmploymentView id={el[0]} />
        </Accordion>
      )
    });
  }

  public render(): ReactNode {
    const { currentStep, items, t } = this.props;

    if (currentStep !== 3) return null;

    return (
      <ErrorBoundary>
        <div>
          <Title>{t('employment.history')}</Title>
          <Subtitle>{t('employment.history.subtitle')}</Subtitle>
          {this.getItems(items)}
          <AddLinkLabel onClick={this.addEmploymentItem}>
            {t('add.employment')}
          </AddLinkLabel>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state: any): StateProps => ({
  items: Object.entries(state.employment)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addEmployment: (id, value) => {
    dispatch(addEmploymentAction(id, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Employment));
