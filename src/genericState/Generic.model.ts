import * as types from './Generic.types';

export interface ShowModalState {
  showModal: boolean;
}

export interface LangState {
  lang: string;
}

export interface PreviewPdfState {
  previewPdf: boolean;
}

export interface UpdateDocumentTitleState {
  documentTitle: string;
}

export interface GenericState {
  showModal: boolean;
  lang: string;
  previewPdf: boolean;
  documentTitle: string;
}

export interface ShowModalAction {
  type: typeof types.SHOW_MODAL;
  value: boolean;
}

export interface ChangeLangAction {
  type: typeof types.CHANGE_LANGUAGE;
  value: string;
}

export interface PreviewPdfAction {
  type: typeof types.PREVIEW_PDF;
  value: boolean;
}

export interface UpdateDocumentTitleAction {
  type: typeof types.UPDATE_DOCUMENT_TITLE;
  value: string;
}

export type ActionType = ShowModalAction &
  ChangeLangAction &
  PreviewPdfAction &
  UpdateDocumentTitleAction;
