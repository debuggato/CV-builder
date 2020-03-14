import { SET_LINK, SET_LABEL, ADD_LINK } from './Links.types';

export type LinksState = [
  {
    label: string | null;
    link: string | null;
  },
];

export interface ReduxProps {
  setLink: (arg0: number, arg1: string) => void;
  setLabel: (arg0: number, arg1: string) => void;
  addLink: (arg0: number, arg1: any) => void;
}

interface AddLinkAction {
  type: typeof ADD_LINK;
  id: number;
  value: any;
}

interface SetLinkAction {
  type: typeof SET_LINK;
  id: number;
  value: string;
}

interface SetLabelAction {
  type: typeof SET_LABEL;
  id: number;
  value: string;
}

export type ActionType = SetLinkAction & SetLabelAction & AddLinkAction;
