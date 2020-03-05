import { CSSProperties } from 'react';

interface Model {
  type: string;
  label?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  style?: CSSProperties;
  defaultValue?: string;
  value?: string;
  name?: string;
  readOnly?: boolean;
  withLabel?: boolean;
  id?: string;
  text?: string;
}

export default Model;
