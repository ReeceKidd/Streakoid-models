import ProfileImages from "./ProfileImages";
import UserTypes from "../Types/UserTypes";

interface FormattedUser {
  _id: string;
  username: string;
  isPayingMember: boolean;
  userType: UserTypes;
  timezone: string;
  createdAt: string;
  updatedAt: string;
  profileImages: ProfileImages;
  pushNotificationToken: string;
}

export default FormattedUser;
