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
var RoleApi = (function () {
    function RoleApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://ut-dev-api.azurewebsites.net';
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
     * @param input
     */
    RoleApi.prototype.roleCreate = function (input, extraHttpRequestParams) {
        return this.roleCreateWithHttpInfo(input, extraHttpRequestParams)
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
     * @param input
     */
    RoleApi.prototype.roleDelete = function (input, extraHttpRequestParams) {
        return this.roleDeleteWithHttpInfo(input, extraHttpRequestParams)
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
     * @param input
     */
    RoleApi.prototype.roleGet = function (input, extraHttpRequestParams) {
        return this.roleGetWithHttpInfo(input, extraHttpRequestParams)
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
     * @param input
     */
    RoleApi.prototype.roleGetAll = function (input, extraHttpRequestParams) {
        return this.roleGetAllWithHttpInfo(input, extraHttpRequestParams)
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
     */
    RoleApi.prototype.roleGetAllPermissions = function (extraHttpRequestParams) {
        return this.roleGetAllPermissionsWithHttpInfo(extraHttpRequestParams)
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
     * @param input
     */
    RoleApi.prototype.roleUpdate = function (input, extraHttpRequestParams) {
        return this.roleUpdateWithHttpInfo(input, extraHttpRequestParams)
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
     * @param input
     */
    RoleApi.prototype.roleCreateWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Role/Create';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json',
            'text/json',
            'text/plain'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param input
     */
    RoleApi.prototype.roleDeleteWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Role/Delete';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        // to determine the Accept header
        var produces = [];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param input
     */
    RoleApi.prototype.roleGetWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Role/Get';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json',
            'text/json',
            'text/plain'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param input
     */
    RoleApi.prototype.roleGetAllWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Role/GetAll';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json',
            'text/json',
            'text/plain'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     */
    RoleApi.prototype.roleGetAllPermissionsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Role/GetAllPermissions';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json',
            'text/json',
            'text/plain'
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
    /**
     *
     *
     * @param input
     */
    RoleApi.prototype.roleUpdateWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Role/Update';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'text/json',
            'application/json-patch+json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json',
            'text/json',
            'text/plain'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return RoleApi;
}());
export { RoleApi };
RoleApi.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RoleApi.ctorParameters = function () { return [
    { type: Http, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
    { type: Configuration, decorators: [{ type: Optional },] },
]; };
//# sourceMappingURL=RoleApi.js.map