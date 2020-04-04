import * as type from './Links.types';

export const addLink = (id: number, value: any) => ({
  type: type.ADD_LINK,
  id: id + 1,
  value,
});

export const setLabel = (id: number, value: string) => ({
  type: type.SET_LABEL,
  id,
  value,
});

export const setLink = (id: number, value: string) => ({
  type: type.SET_LINK,
  id,
  value,
});
