import * as types from '../../store/types/Root.type';

export interface ChooseTemplateState {
	chooseTemplate: boolean;
}

export interface LangState {
	lang: string;
}

export interface UpdateDocumentTitleState {
	documentTitle: string;
}

export interface TemplateState {
	template: number;
}

export interface GenericState {
	modalDisplayed: boolean;
	lang: string;
	documentTitle: string;
	loader: boolean;
}

export interface modalDisplayedModelAction {
	type: typeof types.MODAL_DISPLAYED;
	value: boolean;
}

export interface changeLangModelAction {
	type: typeof types.CHANGE_LANGUAGE;
	value: string;
}

export interface updateDocumentTitleModelAction {
	type: typeof types.UPDATE_DOCUMENT_TITLE;
	value: string;
}

export interface chooseTemplateModelAction {
	type: typeof types.CHOOSE_TEMPLATE;
	value: string;
}

export interface showLoaderModelAction {
	type: typeof types.SHOW_LOADER;
	value: boolean;
}

export type ActionType = modalDisplayedModelAction &
	changeLangModelAction &
	updateDocumentTitleModelAction &
	chooseTemplateModelAction &
	showLoaderModelAction;
