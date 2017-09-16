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

import * as models from './models';

export interface AcceptActivityInvitationInput {
    id: string;

    privacy?: AcceptActivityInvitationInput.PrivacyEnum;

}
export namespace AcceptActivityInvitationInput {
    export enum PrivacyEnum {
        NUMBER_0 = <any> 0,
        NUMBER_10 = <any> 10,
        NUMBER_20 = <any> 20,
        NUMBER_30 = <any> 30
    }
}
