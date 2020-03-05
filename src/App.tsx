import React, { Component, ReactNode } from 'react';
import { Normalize } from 'styled-normalize';

import Resume from './app/resume/Resume.container';
import Sidebar from './app/sidebar/Sidebar.container';
import Modal from './components/modal/Modal.view';

import { GlobalStyle } from './styles/global.style';

class App extends Component {
  public render(): ReactNode {
    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Sidebar />
        <Resume />
        <Modal />
      </>
    );
  }
}

export default App;
