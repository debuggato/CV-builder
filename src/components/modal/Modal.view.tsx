import React, { FC, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Wrapper, Card, Header, Close, Title } from './Modal.style';
import { showModalAction } from '../../genericState';

interface OwnProps {
  children?: ReactNode;
  title: string;
}

type Props = OwnProps & ReduxState & ReduxProps;

const Modal: FC<Props> = ({ isOpened, children, setShowModal, title }: Props): ReactElement => {
  return (
    <Wrapper isOpened={isOpened}>
      <Card>
        <Header>
          <Title>{title}</Title>
          <Close onClick={() => setShowModal(false)}>✕</Close>
        </Header>
        {children}
      </Card>
    </Wrapper>
  );
};

interface ReduxState {
  isOpened: boolean;
}

interface ReduxProps {
  setShowModal: (arg0: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setShowModal(value: boolean) {
      dispatch(showModalAction(value));
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    isOpened: state.generic.showModal
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);