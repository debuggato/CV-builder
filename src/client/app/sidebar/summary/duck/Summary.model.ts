import { SUMMARY } from './Summary.types';

export type SummaryState = {
  description: string;
};

export interface summaryModelAction {
  type: typeof SUMMARY;
  value: string;
}

export type ActionType = summaryModelAction;
