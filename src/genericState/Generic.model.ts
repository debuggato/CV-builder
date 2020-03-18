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

export interface GenericState {
  showModal: boolean;
  lang: string;
  previewPdf: boolean;
}

export interface ReduxProps {
  showModal: (arg0: boolean) => void;
  previewPdf: (arg0: boolean) => void;
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

export type ActionType = ShowModalAction &
  ChangeLangAction &
  PreviewPdfAction;
