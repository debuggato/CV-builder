import * as type from '../../store/types/Skills.type';

export type SkillsState = [
	{
		name: string;
		level: string;
	},
];

export interface addSkillModelAction {
	type: typeof type.ADD_SKILL;
	id: number;
	value: any;
}

export interface nameModelAction {
	type: typeof type.SKILL_NAME;
	id: number;
	value: string;
}

export interface levelModelAction {
	type: typeof type.SKILL_LEVEL;
	id: number;
	value: string;
}

export type ActionType = nameModelAction & levelModelAction;
