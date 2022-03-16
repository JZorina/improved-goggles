
import { RootState } from '../../Store';
export const selectBloodTestData = (state: RootState) =>
  state.labResults.bloodTest;