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
var VotingApi = (function () {
    function VotingApi(http, basePath, configuration) {
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
    VotingApi.prototype.createSuggestions = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.createSuggestionsWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.createVoting = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.createVotingWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.getChatRoomVotings = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.getChatRoomVotingsWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.getVoting = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.getVotingWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.removeSuggestions = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.removeSuggestionsWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.removeVoting = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.removeVotingWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.vote = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.voteWithHttpInfo(input, extraHttpRequestParams)
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
    VotingApi.prototype.createSuggestionsWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/CreateSuggestions';
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
    VotingApi.prototype.createVotingWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/CreateVoting';
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
    VotingApi.prototype.getChatRoomVotingsWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/GetChatRoomVotings';
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
    VotingApi.prototype.getVotingWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/GetVoting';
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
    VotingApi.prototype.removeSuggestionsWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/RemoveSuggestions';
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
    VotingApi.prototype.removeVotingWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/RemoveVoting';
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
    VotingApi.prototype.voteWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Voting/Vote';
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
    VotingApi.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    VotingApi.ctorParameters = function () { return [
        { type: Http, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
        { type: Configuration, decorators: [{ type: Optional },] },
    ]; };
    return VotingApi;
}());
export { VotingApi };
//# sourceMappingURL=VotingApi.js.map