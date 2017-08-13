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

export interface VotingDto {
    activitySuggestions?: Array<models.ActivitySuggestionListDto>;

    timeSlotSuggestions?: Array<models.TimeSlotSuggestionListDto>;

    locationSuggestions?: Array<models.LocationSuggestionListDto>;

    name?: string;

    organiser?: models.UserListDto;

    hasVoted?: boolean;

    numberOfVoters?: number;

    creationTime?: string;

    id?: string;

}
