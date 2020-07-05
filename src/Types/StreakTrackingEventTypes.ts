enum StreakTrackingEventTypes {
    lostStreak = 'lostStreak',
    maintainedStreak = 'maintainedStreak',
    inactiveStreak = 'inactiveStreak',
    forcedToLoseStreakBecauseTeamMemberDidNotCompleteTask = 'forcedToLoseStreakBecauseTeamMemberDidNotCompleteTask',
    recoveredStreak = 'recoveredStreak',
}

export default StreakTrackingEventTypes;
