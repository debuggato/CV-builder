import { SET_SUMMARY } from './Summary.types';

export type SummaryState = {
  summary: string;
};

interface SetSummaryAction {
  type: typeof SET_SUMMARY;
  value: string;
}

export type ActionType = SetSummaryAction;
