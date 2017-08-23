/* Defines the team entity */
export interface IMatchDefinition {

    MatchDefinitionId: number;
    SortOrder: number; // puts question on the page in order
    MissionOrder: number;  // groups them by category
    MissionDescription: string;
    QuestionDescription: string;
    Type: string; // bool / range/ string list
    MinRange: number;
    MaxRange: number;
    OptionList: string;
    CreatedDate: Date;
    MatchYear: number;
}
