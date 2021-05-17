import * as type from '../../store/types/Links.type';
import * as model from '../../store/models/Links.model';

export const addLinkAction = (id: number, value: any): model.addLinkModelAction => ({
	type: type.LINK_ADDED,
	id: id + 1,
	value,
});

export const labelAction = (id: number, value: string): model.labelModelAction => ({
	type: type.LINK_LABEL_SET,
	id,
	value,
});

export const linkAction = (id: number, value: string): model.linkModelAction => ({
	type: type.LINK_TITLE_SET,
	id,
	value,
});
