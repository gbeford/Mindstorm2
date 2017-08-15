/* Defines the team entity */
export interface ITeam {
    teamId: number;
    teamName: string;
    teamNumber: number;
    coachFirstName: string;
    coachLastName: string;
    coachEmail: string;
    altCoachFirstName: string;
    altCoachLastName: string;
    altCoachEmail: string;
    city: string;
    state: string;
    competitionID: number;
}
