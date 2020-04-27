import React, { FC, ReactElement } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  onChange: (arg0: any) => void;
  value: string;
}

const TextEditor: FC<Props> = ({ onChange, value }: Props): ReactElement => {
  return <ReactQuill theme="snow" value={value || ''} onChange={onChange} />;
}

export default TextEditor;
