import { CSSProperties, ChangeEvent } from 'react';

interface Model {
  type: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  style?: CSSProperties;
  defaultValue?: string;
  value?: string;
  readOnly?: boolean;
  id?: string;
  text?: string;
  name?: string;
  ref?: any;
}

export default Model;
