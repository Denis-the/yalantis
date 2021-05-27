import React from "react";
import PropTypes from "prop-types";
import EmployeesDOBUser from "./EmployeesDOBUser";
import { usersArrPropType } from "../../../utils/employeesPropTypes";

const EmployeesDOBMonth = React.memo(({ monthName, users }) => {
  if (users.length === 0) return null;
  return (
    <div className="birthdays__section">
      <h3>{monthName}</h3>
      <ul>
        {users.map((user) => (
          <EmployeesDOBUser key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
});

EmployeesDOBMonth.displayName = "EmployeesDOBMonth";
EmployeesDOBMonth.propTypes = {
  monthName: PropTypes.string.isRequired,
  users: usersArrPropType.isRequired,
};

export default EmployeesDOBMonth;
