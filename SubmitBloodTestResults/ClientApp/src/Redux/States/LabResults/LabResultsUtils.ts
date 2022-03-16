import LabResultsState from ".";
import { GetTestResultsRequest } from "../../../Models/TestResults";

export const getLabResultsRequestBody = (getState: any): GetTestResultsRequest => {
    const state = getState();
    const bloodTestData = LabResultsState.Selectors.selectBloodTestData(state);

    return {
        name:bloodTestData.testName,
        value:bloodTestData.testValue
    }
}