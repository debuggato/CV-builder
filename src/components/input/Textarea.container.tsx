import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em',
  },
};

class Textarea extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState: any) => this.setState({ editorState });

  render() {
    return <Editor editorState={this.state.editorState} onChange={this.onChange} />;
  }
}

export default Textarea;
