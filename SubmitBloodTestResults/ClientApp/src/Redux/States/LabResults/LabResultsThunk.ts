import LabResultsState from ".";
import { GeneralState } from "../..";
import { GetTestResultsRequest } from "../../../Models/TestResults";
import { Api } from "../../../Services";
import { SUUCCESS_STATUS } from "../../../Utils/Constant";
import { AppThunk } from "../../Store";
import { getLabResultsRequestBody } from "./LabResultsUtils";

export const getLabResults = (onSuccess? : ()=>void): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(GeneralState.Actions.setLabResultRequestInProgress(true));

            const requestBody: GetTestResultsRequest = getLabResultsRequestBody(getState);
          

            const response = await Api.General.getTestResults(requestBody);
            console.log('response',response)
            if(response.status == SUUCCESS_STATUS){
                dispatch(GeneralState.Actions.setLabResultRequestSuccess(true));
                dispatch(LabResultsState.Actions.setBloodTestOutputs({testCategory: response.data.testCategory, testResult: response.data.testResult}));
                onSuccess && onSuccess();
            }
        } 
        catch (ex) 
        {
            await dispatch(GeneralState.Actions.setLabResultRequestSuccess(false));
        } 
      };

