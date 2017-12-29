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

export interface CreateRatingInput {
    ratingStatus?: CreateRatingInput.RatingStatusEnum;

    activityId?: string;

    activityPlanId?: string;

    activityTemplateId?: string;

}
export namespace CreateRatingInput {
    export enum RatingStatusEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1,
        NUMBER_MINUS_1 = <any> -1
    }
}
