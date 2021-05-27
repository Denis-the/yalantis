import React from "react";
import { monthNames } from "../../../utils/monthses";
import { userPropType } from "../../../utils/employeesPropTypes";

const EmployeesDOBUser = React.memo(({ user }) => {
  const rawDate = new Date(user.dob);
  const formattedDate = `${rawDate.getDate()} ${monthNames[rawDate.getMonth()]} 
            ${rawDate.getFullYear()} year`;
  return (
    <li className="birthdays__item">
      {user.lastName} {user.firstName} - {formattedDate}
    </li>
  );
});

EmployeesDOBUser.displayName = "EmployeesDOBUser";
EmployeesDOBUser.propTypes = {
  user: userPropType.isRequired,
};

export default EmployeesDOBUser;
