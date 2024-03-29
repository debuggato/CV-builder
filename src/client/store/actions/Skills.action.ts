import * as type from '../../store/types/Skills.type';
import * as model from '../../store/models/Skills.model';

export const nameAction = (id: number, value: string): model.nameModelAction => ({
	type: type.SKILL_NAME_SET,
	id,
	value,
});

export const levelAction = (id: number, value: string): model.levelModelAction => ({
	type: type.SKILL_LEVEL_SET,
	id,
	value,
});

export const addSkillAction = (id: number, value: any): model.addSkillModelAction => ({
	type: type.SKILL_ADDED,
	id: id + 1,
	value,
});
