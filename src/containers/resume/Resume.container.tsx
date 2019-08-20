import React, { Component } from 'react'

import { Wrapper } from './Resume.style'

interface Props {
  
}
interface State {
  
}

export default class Resume extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Wrapper>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
      </Wrapper>
    )
  }
}
