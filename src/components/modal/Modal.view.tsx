import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Card, Header } from './Modal.style';

const Modal: FC = (props: any) => {
  return (
    <Wrapper isOpened={props.isOpened}>
      <Card>
        <Header></Header>
      </Card>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  const { isModalOpened } = state.genericReducer;
  return {
    isOpened: isModalOpened,
  };
};

export default connect(mapStateToProps, null)(Modal);
