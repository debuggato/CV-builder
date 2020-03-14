import { SET_SUMMARY } from './Summary.types';

export type SummaryState = {
  summary: string | null;
};

export interface ReduxProps {
  setSummary: (arg0: string) => void;
}

interface SetSummaryAction {
  type: typeof SET_SUMMARY;
  value: string;
}

export type ActionType = SetSummaryAction;
