import Config from "../../../Configurations";
import { ApiResponse } from "../../../Models";
import { GetTestResultsRequest, GetTestResultsResponse } from "../../../Models/TestResults";
import { IHttpService } from "../IHttpService";
import { ApiServiceBase } from "./ApiServiceBase";

export default class TestResultsApiService extends ApiServiceBase {
   constructor(client: IHttpService) {
      super(client)
   }

   async getTestResults(body: GetTestResultsRequest): Promise<ApiResponse<GetTestResultsResponse>> {
      console.log('getTestResults',body, Config.paths.getTestResult)
      return await this._client.post<GetTestResultsResponse>(Config.paths.getTestResult, body);
   }

}