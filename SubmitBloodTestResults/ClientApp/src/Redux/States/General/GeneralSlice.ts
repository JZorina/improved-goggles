import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneralSliceState {
    labResultRequestInProgress:boolean;
    labResultRequestSuccess:boolean;
}
const initialState:GeneralSliceState = {
    labResultRequestInProgress:false,
    labResultRequestSuccess:false,
 }

export const General = createSlice({
    name: 'General',
    initialState,
    reducers: {     
    setLabResultRequestInProgress: (
        state: GeneralSliceState,
        action: PayloadAction<boolean>,
      ) => {
        state.labResultRequestInProgress = action.payload;
      },
    setLabResultRequestSuccess: (
        state: GeneralSliceState,
        action: PayloadAction<boolean>,
      ) => {
        state.labResultRequestSuccess = action.payload;
      },
    }
});
export const Actions = General.actions;
export const Reducer = General.reducer;