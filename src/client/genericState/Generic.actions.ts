import * as type from './Generic.types';
import * as model from './Generic.model';

export const showModalAction = (value: boolean): model.ShowModalAction => ({
  type: type.SHOW_MODAL,
  value,
});

export const changeLangAction = (value: string): model.ChangeLangAction => ({
  type: type.CHANGE_LANGUAGE,
  value,
});

export const updateDocumentTitleAction = (value: string): model.UpdateDocumentTitleAction => ({
  type: type.UPDATE_DOCUMENT_TITLE,
  value,
});

export const selectTemplateAction = (value: string): model.TemplateAction => ({
  type: type.CHOOSE_TEMPLATE,
  value,
});