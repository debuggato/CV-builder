import * as type from '../../store/types/Root.type';
import * as model from '../../store/models/Root.model';

export const modalDisplayedAction = (value: boolean): model.modalDisplayedModelAction => ({
	type: type.MODAL_DISPLAYED,
	value,
});

export const changeLangAction = (value: string): model.changeLangModelAction => ({
	type: type.CHANGE_LANGUAGE,
	value,
});

export const updateDocumentTitleAction = (value: string): model.updateDocumentTitleModelAction => ({
	type: type.UPDATE_DOCUMENT_TITLE,
	value,
});

export const chooseTemplateAction = (value: string): model.chooseTemplateModelAction => ({
	type: type.CHOOSE_TEMPLATE,
	value,
});

export const showLoaderAction = (value: boolean): model.showLoaderModelAction => ({
	type: type.SHOW_LOADER,
	value,
});