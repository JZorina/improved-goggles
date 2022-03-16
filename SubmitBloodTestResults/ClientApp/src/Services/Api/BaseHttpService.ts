import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Config from '../../Configurations';
import { ApiResponse } from '../../Models/ApiResponse';
import { IHttpService } from './IHttpService';

export default class BaseHttpService implements IHttpService {
    private _service: AxiosInstance;
    private _headers: any;

    constructor() {
        this._service = axios.create({ baseURL: Config.api });
        this._service.interceptors.response.use(this.handleSuccess, this.handleError);
        this._headers = {'Content-Type':'application/json'};
    }

    async get<T>(path: string): Promise<ApiResponse<T>> {
        const response = await this.sendRequest<T>('GET', path, undefined);
        return <ApiResponse<T>>response;

    }
    private handleSuccess = (response:AxiosResponse<any>) => {
        return response.data;
    }

    async post<T>(path: string, body: object): Promise<ApiResponse<T>> {
        const response = await this.sendRequest<T>('POST', path, body);
        return <ApiResponse<T>>response;
    }

    private handleError = (error:any) => {
        let errorMessage;
        if (error?.response?.data) {
            Promise.resolve(error.response.data);
        }
        else {
            if (!error?.response) {
                errorMessage = 'error';
            }
            else {
                // switch (error.response.status) {
                //     case 401:
                //     case 403:
                //         errorMessage = 'unauthorized';
                //         break;
                //     default:
                //         errorMessage = 'error';
                // }
            }
            const errorResponse: ApiResponse<any> = {
                status: 400,
                data: null,
                errors:errorMessage
            };
            return Promise.resolve(errorResponse);
        }
    }
 
    private async sendRequest<T>(method: 'GET' | 'POST', path: string, payload?: object): Promise<any> {        
         return  await this._service.request<ApiResponse<T>>(this.getConfigurations(method, path, payload));
    }
    private getConfigurations(method: 'GET' | 'POST', path: string, payload?: object): AxiosRequestConfig {
        return  {
            method: method,
            url: path,
            responseType: 'json',
            data: payload,
            headers: this._headers
        };
    }
}
