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

export interface UpdateActivityInput {
    startTime?: string;

    endTime?: string;

    isAllDay?: boolean;

    name: string;

    descriptionIds?: Array<number>;

    tagTexts?: Array<string>;

    locationId?: string;

    id?: string;

}