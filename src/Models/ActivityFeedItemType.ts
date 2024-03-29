import ActivityFeedItemTypes from '../Types/ActivityFeedItemTypes';

export interface CreatedSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.createdSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface ArchivedSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.archivedSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface RestoredSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.restoredSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface DeletedSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.deletedSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface EditedSoloStreakNameActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.editedSoloStreakName;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface EditedSoloStreakDescriptionActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.editedSoloStreakDescription;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    soloStreakDescription: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface CompletedSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.completedSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface IncompletedSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.incompletedSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface LostSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.lostSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    numberOfDaysLost: number;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface RecoveredSoloStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.recoveredSoloStreak;
    userId: string;
    userProfileImage: string;
    soloStreakId: string;
    soloStreakName: string;
    streakNumberOfDays: number;
    username: string;
    createdAt?: string;
    _id?: string;
}

export interface CompletedChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.completedChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface IncompletedChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.incompletedChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface JoinedChallengeActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.joinedChallenge;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface ArchivedChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.archivedChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface RestoredChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.restoredChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface DeletedChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.deletedChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface LostChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.lostChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    numberOfDaysLost: number;
    username: string;
    createdAt?: string;
    _id?: string;
}

export interface RecoveredChallengeStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.recoveredChallengeStreak;
    userId: string;
    userProfileImage: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    streakNumberOfDays: number;
    username: string;
    createdAt?: string;
    _id?: string;
}

export interface CreatedTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.createdTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface ArchivedTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.archivedTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface RestoredTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.restoredTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface DeletedTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.deletedTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface CompletedTeamMemberStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.completedTeamMemberStreak;
    userId: string;
    userProfileImage: string;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface IncompletedTeamMemberStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.incompletedTeamMemberStreak;
    userId: string;
    userProfileImage: string;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface RecoveredTeamMemberStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.recoveredTeamMemberStreak;
    userId: string;
    userProfileImage: string;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    streakNumberOfDays: number;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface JoinedTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.joinedTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface EditedTeamStreakNameActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.editedTeamStreakName;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface EditedTeamStreakDescriptionActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.editedTeamStreakDescription;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    teamStreakDescription: string;
    username: string;
    createdAt?: string;
    _id?: string;
}

export interface LostTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.lostTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    numberOfDaysLost: number;
    username: string;
    createdAt?: string;
    _id?: string;
}

export interface RecoveredTeamStreakActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.recoveredTeamStreak;
    userId: string;
    userProfileImage: string;
    teamStreakId: string;
    teamStreakName: string;
    streakNumberOfDays: number;
    username: string;
    createdAt?: string;
    _id?: string;
}

export interface CreatedAccountActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.createdAccount;
    userId: string;
    userProfileImage: string;
    createdAt?: string;
    username: string;
    _id?: string;
}

export interface FollowedUserActivityFeedItem {
    activityFeedItemType: typeof ActivityFeedItemTypes.followedUser;
    userId: string;
    userProfileImage: string;
    userFollowedId: string;
    createdAt?: string;
    username: string;
    userFollowedUsername: string;
    _id?: string;
}

export type ActivityFeedItemType =
    | CreatedSoloStreakActivityFeedItem
    | ArchivedSoloStreakActivityFeedItem
    | RestoredSoloStreakActivityFeedItem
    | DeletedSoloStreakActivityFeedItem
    | EditedSoloStreakNameActivityFeedItem
    | EditedSoloStreakDescriptionActivityFeedItem
    | CompletedSoloStreakActivityFeedItem
    | IncompletedSoloStreakActivityFeedItem
    | LostSoloStreakActivityFeedItem
    | RecoveredSoloStreakActivityFeedItem
    | CompletedChallengeStreakActivityFeedItem
    | IncompletedChallengeStreakActivityFeedItem
    | JoinedChallengeActivityFeedItem
    | ArchivedChallengeStreakActivityFeedItem
    | RestoredChallengeStreakActivityFeedItem
    | DeletedChallengeStreakActivityFeedItem
    | LostChallengeStreakActivityFeedItem
    | RecoveredChallengeStreakActivityFeedItem
    | CreatedTeamStreakActivityFeedItem
    | ArchivedTeamStreakActivityFeedItem
    | RestoredTeamStreakActivityFeedItem
    | DeletedTeamStreakActivityFeedItem
    | CompletedTeamMemberStreakActivityFeedItem
    | IncompletedTeamMemberStreakActivityFeedItem
    | RecoveredTeamMemberStreakActivityFeedItem
    | JoinedTeamStreakActivityFeedItem
    | EditedTeamStreakNameActivityFeedItem
    | EditedTeamStreakDescriptionActivityFeedItem
    | LostTeamStreakActivityFeedItem
    | RecoveredTeamStreakActivityFeedItem
    | CreatedAccountActivityFeedItem
    | FollowedUserActivityFeedItem;
