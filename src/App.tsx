import React, { Component, Fragment, ReactNode } from 'react'
import { Normalize } from 'styled-normalize'

import Resume from './app/resume/Resume.view'
import Sidebar from './app/sidebar/Sidebar.container'

import { GlobalStyle } from './styles/global.style'

export default class App extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Normalize />
        <GlobalStyle />
        <Sidebar />
        <Resume />
      </Fragment>
    )
  }
}
