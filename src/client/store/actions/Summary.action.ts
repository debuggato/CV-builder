import * as type from '../../store/types/Summary.type';
import { summaryModelAction } from '../../store/models/Summary.model';

export const summaryAction = (value: string): summaryModelAction => ({
	type: type.SUMMARY,
	value,
});
