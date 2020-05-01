import * as type from './Links.types';

export type LinksState = [
  {
    label: string;
    link: string;
  },
];

export interface addLinkModelAction {
  type: typeof type.ADD_LINK;
  id: number;
  value: any;
}

export interface linkModelAction {
  type: typeof type.LINK_TITLE;
  id: number;
  value: string;
}

export interface labelModelAction {
  type: typeof type.LINK_LABEL;
  id: number;
  value: string;
}

export type ActionType = linkModelAction & labelModelAction & addLinkModelAction;
