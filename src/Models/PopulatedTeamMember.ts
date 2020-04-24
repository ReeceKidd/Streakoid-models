import { TeamMemberStreak } from './TeamMemberStreak';

export interface PopulatedTeamMember {
    _id: string;
    username: string;
    profileImage: string;
    teamMemberStreak: TeamMemberStreak;
}
