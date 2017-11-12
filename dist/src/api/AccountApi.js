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
var AccountApi = (function () {
    function AccountApi(http, basePath, configuration) {
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
    AccountApi.prototype.checkUserNameOrEmailAddress = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.checkUserNameOrEmailAddressWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.forgotPassword = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.forgotPasswordWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.isTenantAvailable = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.isTenantAvailableWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.resendValidationEmail = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.resendValidationEmailWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.resetPassword = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.resetPasswordWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.signUp = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.signUpWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.signUpAsOrganisation = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.signUpAsOrganisationWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.validateEmail = /**
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        return this.validateEmailWithHttpInfo(input, extraHttpRequestParams)
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
    AccountApi.prototype.checkUserNameOrEmailAddressWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/CheckUserNameOrEmailAddress';
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
            'application/json',
            'text/json',
            'text/plain'
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
    AccountApi.prototype.forgotPasswordWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/ForgotPassword';
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
    AccountApi.prototype.isTenantAvailableWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/IsTenantAvailable';
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
            'application/json',
            'text/json',
            'text/plain'
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
    AccountApi.prototype.resendValidationEmailWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/ResendValidationEmail';
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
    AccountApi.prototype.resetPasswordWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/ResetPassword';
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
    AccountApi.prototype.signUpWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/SignUp';
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
            'application/json',
            'text/json',
            'text/plain'
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
    AccountApi.prototype.signUpAsOrganisationWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/SignUpAsOrganisation';
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
            'application/json',
            'text/json',
            'text/plain'
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
    AccountApi.prototype.validateEmailWithHttpInfo = /**
         *
         *
         * @param input
         */
    function (input, extraHttpRequestParams) {
        var path = this.basePath + '/api/services/app/Account/ValidateEmail';
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
            'application/json',
            'text/json',
            'text/plain'
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
    AccountApi.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AccountApi.ctorParameters = function () { return [
        { type: Http, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
        { type: Configuration, decorators: [{ type: Optional },] },
    ]; };
    return AccountApi;
}());
export { AccountApi };
//# sourceMappingURL=AccountApi.js.map