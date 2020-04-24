import StreakTypes from '../Types/StreakTypes';
import AgendaJobNames from '../Types/AgendaJobNames';
export interface DailyJob {
    _id: string;
    agendaJobId: string;
    jobName: AgendaJobNames;
    timezone: string;
    localisedJobCompleteTime: string;
    streakType: StreakTypes;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=DailyJob.d.ts.map
