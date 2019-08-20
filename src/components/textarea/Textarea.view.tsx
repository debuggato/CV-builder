import React, { CSSProperties, Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { Wrapper } from './Textarea.style'

interface Props {
  label?: string,
  isVisible?: boolean,
  withLabel: boolean
}

interface State {
  text: string
}

class Textarea extends Component<Props, State> {

  state = {
    text: ''
  }

  handleChange = (value: string): void => {
    this.setState({
      text: value
    })
  }

  render () {

    const { text } = this.state

    const styleEditor = {
      height: '200px'
    }

    return (
      <Wrapper isVisible={ this.props.isVisible }>
        {
          this.props.withLabel ? <label>{ this.props.label }</label> : null
        }
        <ReactQuill
          value={ text }
          onChange={ this.handleChange }
          style={ styleEditor }
        />
      </Wrapper>
    )
  }
}

export default Textarea