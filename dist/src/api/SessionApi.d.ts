import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class SessionApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     */
    sessionGetCurrentLoginInformations(extraHttpRequestParams?: any): Observable<models.GetCurrentLoginInformationsOutput>;
    /**
     *
     *
     */
    sessionGetCurrentLoginInformationsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
