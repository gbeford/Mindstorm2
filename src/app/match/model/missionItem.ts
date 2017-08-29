import { IMission } from "app/match/model/mission";

/* Defines the team entity */
export interface IMissionItem {
    missionItemId: number;
    questionDescription: string;
    type: string; // bool / range/ string list
    minRange?: number;
    maxRange?: number;
    optionList?: (null | string)[];
    sortOrder: number; // puts question on the page in order
    missionId: number;
    optionListArray: string[];
    rangeListArray: string[];
}
