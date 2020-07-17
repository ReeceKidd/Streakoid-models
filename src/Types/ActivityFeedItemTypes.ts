export enum ActivityFeedItemTypes {
    // Solo Streak
    createdSoloStreak = 'createdSoloStreak',
    archivedSoloStreak = 'archivedSoloStreak',
    restoredSoloStreak = 'restoredSoloStreak',
    deletedSoloStreak = 'deletedSoloStreak',
    editedSoloStreakName = 'editedSoloStreakName',
    editedSoloStreakDescription = 'editedSoloStreakDescription',
    completedSoloStreak = 'completedSoloStreak',
    incompletedSoloStreak = 'incompletedSoloStreak',
    lostSoloStreak = 'lostSoloStreak',
    recoveredSoloStreak = 'recoveredSoloStreak',
    //Challenge Streak
    completedChallengeStreak = 'completedChallengeStreak',
    incompletedChallengeStreak = 'incompletedChallengeStreak',
    joinedChallenge = 'joinedChallenge',
    archivedChallengeStreak = 'archivedChallengeStreak',
    restoredChallengeStreak = 'restoredChallengeStreak',
    deletedChallengeStreak = 'deletedChallengeStreak',
    lostChallengeStreak = 'lostChallengeStreak',
    recoveredChallengeStreak = 'recoveredChallengeStreak',
    //Team Streak
    createdTeamStreak = 'createdTeamStreak',
    archivedTeamStreak = 'archivedTeamStreak',
    restoredTeamStreak = 'restoredTeamStreak',
    deletedTeamStreak = 'deletedTeamStreak',
    editedTeamStreakName = 'editedTeamStreakName',
    editedTeamStreakDescription = 'editedTeamStreakDescription',
    completedTeamMemberStreak = 'completedTeamMemberStreak',
    incompletedTeamMemberStreak = 'incompletedTeamMemberStreak',
    recoveredTeamMemberStreak = 'recoveredTeamMemberStreak',
    joinedTeamStreak = 'joinedTeamStreak',
    lostTeamStreak = 'lostTeamStreak',
    // User
    createdAccount = 'createdAccount',
    followedUser = 'followedUser',
}

export default ActivityFeedItemTypes;
