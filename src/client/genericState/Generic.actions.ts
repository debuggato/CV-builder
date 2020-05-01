import * as type from './Generic.types';
import * as model from './Generic.model';

export const showTemplateGalleryAction = (value: boolean): model.showGalleryModelAction => ({
  type: type.SHOW_TEMPLATE_GALLERY,
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