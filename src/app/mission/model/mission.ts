import { IMissionItem } from './missionItem';

/* Defines the team entity */
export interface IMission {
    missionId: number;
    missionDescription: string;
    missionItems: IMissionItem[];
    created: string;
    sortOrder: number;
    matchYear: number;
}
