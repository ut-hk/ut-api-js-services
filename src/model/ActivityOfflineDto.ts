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

export interface ActivityOfflineDto {
    name?: string;

    descriptions?: Array<models.DescriptionDto>;

    location?: models.LocationDto;

    tags?: Array<models.TagDto>;

    owner?: models.UserListDto;

    startTime?: string;

    endTime?: string;

    isAllDay?: boolean;

    alertTimings?: Array<ActivityOfflineDto.AlertTimingsEnum>;

    myRatingStatus?: ActivityOfflineDto.MyRatingStatusEnum;

    isBookmarked?: boolean;

    numberOfLikes?: number;

    numberOfDislikes?: number;

    numberOfComments?: number;

    id?: string;

}
export namespace ActivityOfflineDto {
    export enum AlertTimingsEnum {
        _0 = <any> '0',
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        _5 = <any> '5',
        _6 = <any> '6',
        _7 = <any> '7',
        _8 = <any> '8'
    }
    export enum MyRatingStatusEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1,
        NUMBER_MINUS_1 = <any> -1
    }
}
