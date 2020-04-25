import * as type from './Links.types';

export const addLinkAction = (id: number, value: any) => ({
  type: type.ADD_LINK,
  id: id + 1,
  value,
});

export const setLabelAction = (id: number, value: string) => ({
  type: type.SET_LABEL,
  id,
  value,
});

export const setLinkAction = (id: number, value: string) => ({
  type: type.SET_LINK,
  id,
  value,
});
