import { SHOW_MODAL, CHANGE_LANGUAGE, PREVIEW_PDF, UPDATE_DOCUMENT_TITLE } from './Generic.types';
import { ShowModalAction, ChangeLangAction, PreviewPdfAction, UpdateDocumentTitleAction } from './Generic.model';

export const showModalAction = (value: boolean): ShowModalAction => ({
  type: SHOW_MODAL,
  value,
});

export const changeLangAction = (value: string): ChangeLangAction => ({
  type: CHANGE_LANGUAGE,
  value,
});

export const previewPdfAction = (value: boolean): PreviewPdfAction => ({
  type: PREVIEW_PDF,
  value,
});

export const updateDocumentTitleAction = (value: string): UpdateDocumentTitleAction => ({
  type: UPDATE_DOCUMENT_TITLE,
  value,
});