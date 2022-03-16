import { ApiResponse } from "../../Models/ApiResponse";

export interface IHttpService {
    get<T>(path: string, ): Promise<ApiResponse<T>>,
    post<T>(path: string, body: object): Promise<ApiResponse<T>>,
}
