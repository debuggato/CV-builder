import { SHOW_MODAL, CHANGE_LANGUAGE, PREVIEW_PDF } from './Generic.types';
import { ShowModalAction, ChangeLangAction, PreviewPdfAction } from './Generic.model';

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