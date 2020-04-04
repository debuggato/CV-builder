import React, { FC, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Wrapper, Card, Header, Close, Title, Body } from './Modal.style';
import { showModalAction } from '../../genericState/Generic.actions';

interface OwnProps {
  children?: ReactNode;
  title: string;
}

interface StateProps {
  isOpened: boolean;
}

interface DispatchProps {
  setShowModal: (arg0: boolean) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const Modal: FC<Props> = ({ isOpened, children, setShowModal, title }: Props): ReactElement => {
  return (
    <Wrapper isOpened={isOpened}>
      <Card>
        <Header>
          <Title>{title}</Title>
          <Close onClick={() => setShowModal(false)}>✕</Close>
        </Header>
        <Body>
          {children}
        </Body>
      </Card>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setShowModal(value: boolean) {
    dispatch(showModalAction(value));
  }
})

const mapStateToProps = (state: any) => ({
  isOpened: state.generic.showModal
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);