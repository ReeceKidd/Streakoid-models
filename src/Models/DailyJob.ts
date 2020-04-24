import StreakTypes from "../Types/StreakTypes";
import AgendaJobNames from "../Types/AgendaJobNames";

interface DailyJob {
  _id: string;
  agendaJobId: string;
  jobName: AgendaJobNames;
  timezone: string;
  localisedJobCompleteTime: string;
  streakType: StreakTypes;
  createdAt: string;
  updatedAt: string;
}

export default DailyJob;
