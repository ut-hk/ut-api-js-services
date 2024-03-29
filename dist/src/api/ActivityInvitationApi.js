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
var ActivityInvitationApi = (function () {
    function ActivityInvitationApi(http, basePath, configuration) {
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
     * @param input
     */
    /**
         *
         * @param input
         */
    ActivityInvitationApi.prototype.acceptActivityInvitation = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.acceptActivityInvitationWithHttpInfo(input, extraHttpRequestParams)
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
    /**
         *
         * @param input
         */
    ActivityInvitationApi.prototype.cancelActivityInvitation = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.cancelActivityInvitationWithHttpInfo(input, extraHttpRequestParams)
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
    /**
         *
         * @param input
         */
    ActivityInvitationApi.prototype.createActivityInvitations = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.createActivityInvitationsWithHttpInfo(input, extraHttpRequestParams)
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
    /**
         *
         * @param input
         */
    ActivityInvitationApi.prototype.getActvityInvitations = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.getActvityInvitationsWithHttpInfo(input, extraHttpRequestParams)
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
    /**
         *
         */
    ActivityInvitationApi.prototype.getMyPendingActivityInvitations = /**
         *
         */
    function (extraHttpRequestParams) {
        return this.getMyPendingActivityInvitationsWithHttpInfo(extraHttpRequestParams)
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
    /**
         *
         * @param input
         */
    ActivityInvitationApi.prototype.ignoreActivityInvitation = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.ignoreActivityInvitationWithHttpInfo(input, extraHttpRequestParams)
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
    /**
         *
         * @param input
         */
    ActivityInvitationApi.prototype.rejectActivityInvitation = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.rejectActivityInvitationWithHttpInfo(input, extraHttpRequestParams)
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
    /**
         *
         *
         * @param input
         */
    ActivityInvitationApi.prototype.acceptActivityInvitationWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/AcceptActivityInvitation';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        // to determine the Accept header
        var produces = [];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            // https://github.com/angular/angular/issues/10612
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
    /**
         *
         *
         * @param input
         */
    ActivityInvitationApi.prototype.cancelActivityInvitationWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/CancelActivityInvitation';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        // to determine the Accept header
        var produces = [];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            // https://github.com/angular/angular/issues/10612
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
    /**
         *
         *
         * @param input
         */
    ActivityInvitationApi.prototype.createActivityInvitationsWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/CreateActivityInvitations';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        // to determine the Accept header
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            // https://github.com/angular/angular/issues/10612
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
    /**
         *
         *
         * @param input
         */
    ActivityInvitationApi.prototype.getActvityInvitationsWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/GetActvityInvitations';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        // to determine the Accept header
        var produces = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            // https://github.com/angular/angular/issues/10612
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
    /**
         *
         *
         */
    ActivityInvitationApi.prototype.getMyPendingActivityInvitationsWithHttpInfo = /**
         *
         *
         */
    function (extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/GetMyPendingActivityInvitations';
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
    /**
     *
     *
     * @param input
     */
    /**
         *
         *
         * @param input
         */
    ActivityInvitationApi.prototype.ignoreActivityInvitationWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/IgnoreActivityInvitation';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        // to determine the Accept header
        var produces = [];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            // https://github.com/angular/angular/issues/10612
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
    /**
         *
         *
         * @param input
         */
    ActivityInvitationApi.prototype.rejectActivityInvitationWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/ActivityInvitation/RejectActivityInvitation';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        // to determine the Accept header
        var produces = [];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input),
            // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ActivityInvitationApi.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ActivityInvitationApi.ctorParameters = function () { return [
        { type: Http, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
        { type: Configuration, decorators: [{ type: Optional },] },
    ]; };
    return ActivityInvitationApi;
}());
export { ActivityInvitationApi };
//# sourceMappingURL=ActivityInvitationApi.js.map