import * as type from './Skills.types';

export const setName = (id: number, value: string) => ({
  type: type.SET_NAME,
  id,
  value,
});

export const setLevel = (id: number, value: string) => ({
  type: type.SET_LEVEL,
  id,
  value,
});

export const addSkill = (id: number, value: any) => ({
  type: type.ADD_SKILL,
  id: id + 1,
  value,
});
