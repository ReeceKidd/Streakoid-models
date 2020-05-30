import { TeamMemberStreak } from './TeamMemberStreak';

export interface PopulatedTeamMember {
    _id: string;
    profileImage: string;
    teamMemberStreak: TeamMemberStreak;
    username: string;
}
