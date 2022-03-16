import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface LabResultsSliceState {
    bloodTest:{
        testName:string;
        testValue:number;
        testCategory:string;
        testResult:boolean;
    }
}
const initialState:LabResultsSliceState = {
    bloodTest:{
        testName:'',
        testValue:0,
        testCategory:'',
        testResult:false
    }
}

export const LabResults = createSlice({
    name: 'LabResults',
    initialState,
    reducers: {     
    setBloodTestInputs: (
        state: LabResultsSliceState,
        action: PayloadAction<{testName:string,testValue:number}>,
      ) => {
        const {testName,testValue} = action.payload;
        state.bloodTest.testName = testName;
        state.bloodTest.testValue = testValue;
      },
    setBloodTestOutputs: (
        state: LabResultsSliceState,
        action: PayloadAction<{testCategory:string,testResult:boolean}>,
      ) => {
        const {testCategory,testResult} = action.payload;
        state.bloodTest.testCategory = testCategory;
        state.bloodTest.testResult = testResult;
      },
    }
});
export const Actions = LabResults.actions;
export const Reducer = LabResults.reducer;