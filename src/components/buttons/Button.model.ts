interface Model {
  onClick(): void;
  color: string;
  type: 'submit' | 'button' | 'reset';
  isLink?: boolean;
  disabled?: boolean;
}

export default Model;
