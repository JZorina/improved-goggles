import BaseHttpService from './BaseHttpService';
import { IHttpService } from './IHttpService';
import TestResultsApiService from './ApiServices/TestResultsApiService';

const client: IHttpService = new BaseHttpService();

const Api = {
    General: new TestResultsApiService(client),
}

export default Api;