import React, { Component, Fragment } from 'react'
import { Normalize } from 'styled-normalize'

import Resume from './containers/resume/Resume.container'
import Sidebar from './containers/sidebar/Sidebar.container'
import Wizard from './containers/wizard/Wizard.container'

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
