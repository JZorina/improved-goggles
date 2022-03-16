import { IHttpService } from "../IHttpService";

export class ApiServiceBase {
    _client: IHttpService;

    constructor(client: IHttpService) {
        this._client = client;
    }
}