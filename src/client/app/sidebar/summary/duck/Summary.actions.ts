import * as type from './Summary.types';
import { summaryModelAction } from './Summary.model';

export const summaryAction = (value: string): summaryModelAction => ({
  type: type.SUMMARY,
  value,
});
