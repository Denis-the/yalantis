import React from "react";
import PropTypes from "prop-types";
import { monthNames } from "../../../utils/monthses";

const EmployeesDOBUser = ({ user }) => {
  const rawDate = new Date(user.dob);
  const formattedDate = `${rawDate.getDate()} ${monthNames[rawDate.getMonth()]} 
            ${rawDate.getFullYear()} year`;
  return (
    <li className="birthdays__item">
      {user.lastName} {user.firstName} - {formattedDate}
    </li>
  );
};

EmployeesDOBUser.displayName = "EmployeesDOBUser";
EmployeesDOBUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string,
  }),
};

export default EmployeesDOBUser;
