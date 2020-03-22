import React, { Component } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItalic, faBold, faUnderline } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/buttons/Button.view';
import { ActionsWrapper, EditorStyled } from './TextEditor.style';

interface Props {
  onChange: (arg0: any) => void;
}

class TextEditor extends Component<Props, {}> {

  state = {
    editorState: EditorState.createEmpty()
  };

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState
    });

    this.props.onChange(this.getText(this.state.editorState));
  };

  getText = (editorState: any) => {
    const content = convertToRaw(editorState.getCurrentContent());
    return content.blocks.map((el) => {
      return el.text;
    });
  }

  handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <ActionsWrapper>
          <Button type="button" onClick={this.onUnderlineClick}>
            <FontAwesomeIcon icon={faUnderline} />
          </Button>
          <Button type="button" onClick={this.onBoldClick}>
            <FontAwesomeIcon icon={faBold} />
          </Button>
          <Button type="button" onClick={this.onItalicClick}>
            <FontAwesomeIcon icon={faItalic} />
          </Button>
        </ActionsWrapper>
        <EditorStyled>
          <Editor
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder="Type here..."
          />
        </EditorStyled>
      </div>
    );
  }
}

export default TextEditor;
