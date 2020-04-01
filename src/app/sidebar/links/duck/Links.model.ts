import { SET_LINK, SET_LABEL, ADD_LINK } from './Links.types';

export type LinksState = [
  {
    label: string;
    link: string;
  },
];

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
