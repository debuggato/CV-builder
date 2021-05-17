import * as type from '../../store/types/Root.type';
import * as model from '../../store/models/Root.model';

export const modalDisplayedAction = (value: boolean): model.modalDisplayedModelAction => ({
	type: type.MODAL_DISPLAYED,
	value,
});

export const changeLangAction = (value: string): model.changeLangModelAction => ({
	type: type.LANGUAGE_CHANGED,
	value,
});

export const updateDocumentTitleAction = (value: string): model.updateDocumentTitleModelAction => ({
	type: type.DOCUMENT_TITLE_UPDATED,
	value,
});

export const chooseTemplateAction = (value: string): model.chooseTemplateModelAction => ({
	type: type.TEMPLATE_CHOOSED,
	value,
});

export const showLoaderAction = (value: boolean): model.showLoaderModelAction => ({
	type: type.LOADER_DISPLAYED,
	value,
});