import { RootState } from '../../Store';

export const selectBloodTestDataStatus = (state: RootState) =>
  state.general.labResultRequestSuccess;