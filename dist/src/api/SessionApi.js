/**
 * UniTime API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
var SessionApi = (function () {
    function SessionApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://api.unitime.hk';
        this.defaultHeaders = new Headers();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     */
    /**
         *
         */
    SessionApi.prototype.sessionGetCurrentLoginInformations = /**
         *
         */
    function (extraHttpRequestParams) {
        return this.sessionGetCurrentLoginInformationsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     *
     */
    /**
         *
         *
         */
    SessionApi.prototype.sessionGetCurrentLoginInformationsWithHttpInfo = /**
         *
         *
         */
    function (extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Session/GetCurrentLoginInformations';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SessionApi.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SessionApi.ctorParameters = function () { return [
        { type: Http, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
        { type: Configuration, decorators: [{ type: Optional },] },
    ]; };
    return SessionApi;
}());
export { SessionApi };
//# sourceMappingURL=SessionApi.js.map