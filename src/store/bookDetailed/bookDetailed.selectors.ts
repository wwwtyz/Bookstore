import { RootState } from '../rootStore';

export const bookDetailedSelector = (
  state: RootState
): RootState['bookDetailed']['bookDetailed'] => state.bookDetailed.bookDetailed;

export const bookDetailedLoadingStateSelector = (
  state: RootState
): RootState['bookDetailed']['loadingState'] => state.bookDetailed.loadingState;
