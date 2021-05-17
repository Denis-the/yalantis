import React from "react";
import PropTypes from "prop-types";
import EmployeesDOBMonth from "./EmployeesDOBMonth";
import { getMonthOrder, monthNames } from "../../../utils/monthses";

const monthOrder = getMonthOrder();

const EmployeesDOB = ({ activeUsers }) => {
  return (
    <div className="birthdays__container">
      <h2 className="header">Employees birthday</h2>
      {activeUsers.length === 0 ? (
        <div className="birthdays__monthses-placeholder">Employees List is empty</div>
      ) : (
        <div className="birthdays__monthses">
          {monthOrder.map((monthId) => (
            <EmployeesDOBMonth
              key={monthId}
              monthName={monthNames[monthId]}
              users={activeUsers.filter(
                (user) => new Date(user.dob).getMonth() === monthId
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

EmployeesDOB.displayName = "EmployeesDOB";
EmployeesDOB.propTypes = {
  activeUsers: PropTypes.array,
};

export default EmployeesDOB;
