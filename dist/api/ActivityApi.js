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
var ActivityApi = (function () {
    function ActivityApi(http, basePath, configuration) {
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
    ActivityApi.prototype.addImagesToActivity = function (input, extraHttpRequestParams) {
        return this.addImagesToActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.bookmarkActivity = function (input, extraHttpRequestParams) {
        return this.bookmarkActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.createActivity = function (input, extraHttpRequestParams) {
        return this.createActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.createActivityFromActivityTemplate = function (input, extraHttpRequestParams) {
        return this.createActivityFromActivityTemplateWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.getActivities = function (input, extraHttpRequestParams) {
        return this.getActivitiesWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.getActivity = function (input, extraHttpRequestParams) {
        return this.getActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.getMyActivities = function (input, extraHttpRequestParams) {
        return this.getMyActivitiesWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.getMyActivityIds = function (input, extraHttpRequestParams) {
        return this.getMyActivityIdsWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.getWorldActivities = function (input, extraHttpRequestParams) {
        return this.getWorldActivitiesWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.removeActivity = function (input, extraHttpRequestParams) {
        return this.removeActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.unbookmarkActivity = function (input, extraHttpRequestParams) {
        return this.unbookmarkActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.updateActivity = function (input, extraHttpRequestParams) {
        return this.updateActivityWithHttpInfo(input, extraHttpRequestParams)
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
    ActivityApi.prototype.addImagesToActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/AddImagesToActivity';
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
    ActivityApi.prototype.bookmarkActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/BookmarkActivity';
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
    ActivityApi.prototype.createActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/CreateActivity';
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
    ActivityApi.prototype.createActivityFromActivityTemplateWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/CreateActivityFromActivityTemplate';
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
    ActivityApi.prototype.getActivitiesWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/GetActivities';
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
    ActivityApi.prototype.getActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/GetActivity';
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
    ActivityApi.prototype.getMyActivitiesWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/GetMyActivities';
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
    ActivityApi.prototype.getMyActivityIdsWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/GetMyActivityIds';
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
    ActivityApi.prototype.getWorldActivitiesWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/GetWorldActivities';
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
    ActivityApi.prototype.removeActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/RemoveActivity';
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
    ActivityApi.prototype.unbookmarkActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/UnbookmarkActivity';
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
    ActivityApi.prototype.updateActivityWithHttpInfo = function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Activity/UpdateActivity';
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
    return ActivityApi;
}());
export { ActivityApi };
ActivityApi.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ActivityApi.ctorParameters = function () { return [
    { type: Http, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
    { type: Configuration, decorators: [{ type: Optional },] },
]; };
//# sourceMappingURL=ActivityApi.js.map