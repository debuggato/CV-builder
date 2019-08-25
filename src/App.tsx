import React, { Component, Fragment } from 'react'
import { Normalize } from 'styled-normalize'

import Resume from './app/resume/Resume.container'
import Sidebar from './app/sidebar/Sidebar.container'

import { GlobalStyle } from './styles/global.style'

export default class App extends Component {
  render() {
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
