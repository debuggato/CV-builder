import React, { FC, ReactElement, useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const Textarea: FC = (): ReactElement => {
  const [editor, setEditor] = useState(EditorState.createEmpty());

  return <Editor editorState={editor} onChange={e => setEditor(e)} />;
}

export default Textarea;
