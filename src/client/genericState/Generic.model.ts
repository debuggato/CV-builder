import * as types from './Generic.types';

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
  templateGallery: boolean;
  lang: string;
  documentTitle: string;
  loader: boolean;
  template: {
    selected: number | null;
    available: Object;
  }
}

export interface ShowTemplateGalleryAction {
  type: typeof types.SHOW_TEMPLATE_GALLERY;
  value: boolean;
}

export interface ChangeLangAction {
  type: typeof types.CHANGE_LANGUAGE;
  value: string;
}

export interface UpdateDocumentTitleAction {
  type: typeof types.UPDATE_DOCUMENT_TITLE;
  value: string;
}

export interface ChooseTemplateAction {
  type: typeof types.CHOOSE_TEMPLATE;
  value: string;
}

export interface ShowLoaderAction {
  type: typeof types.SHOW_LOADER;
  value: boolean;
}

export type ActionType = ShowTemplateGalleryAction &
  ChangeLangAction &
  UpdateDocumentTitleAction &
  ChooseTemplateAction &
  ShowLoaderAction;
