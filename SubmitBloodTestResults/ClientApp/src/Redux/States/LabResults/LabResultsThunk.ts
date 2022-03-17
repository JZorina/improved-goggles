import LabResultsState from ".";
import { GeneralState } from "../..";
import { GetTestResultsRequest } from "../../../Models/TestResults";
import { Api } from "../../../Services";
import { SUCCESS_STATUS } from "../../../Utils/Constant";
import { AppThunk } from "../../Store";
import { getLabResultsRequestBody } from "./LabResultsUtils";
export const getLabResults = (onSuccess? : ()=>void,onFailure? : ()=>void): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(GeneralState.Actions.setLabResultRequestInProgress(true));

            const requestBody: GetTestResultsRequest = getLabResultsRequestBody(getState);
            const response = await Api.General.getTestResults(requestBody);
            if(response && response.statusCode == SUCCESS_STATUS){
              console.log('response.statusCode',response.statusCode)
                dispatch(LabResultsState.Actions.setBloodTestOutputs({testCategory: response.data.testCategory, testResult: response.data.testResult}));
                onSuccess && onSuccess();
                dispatch(GeneralState.Actions.setLabResultRequestSuccess(true));
            }
            else{
                onFailure && onFailure();
                console.log('response else',response)
                await dispatch(GeneralState.Actions.setLabResultRequestSuccess(false));
            }
        } 
        catch (ex) 
        {
            console.log('response catch',ex)
            onFailure && onFailure();
            await dispatch(GeneralState.Actions.setLabResultRequestSuccess(false));
        } 
      };

