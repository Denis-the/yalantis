import React from "react";
import PropTypes from "prop-types";
import EmployeesList from "./EmployeesList/EmployeesList";
import EmployeesDOB from "./EmployeesDOB/EmployeesDOB";
import { usersArrPropType } from "../../utils/employeesPropTypes";

const Employees = ({ activeUsers, activateUser, deactivateUser }) => (
  <div className="empl__container">
    <EmployeesList
      activeUsers={activeUsers}
      activateUser={activateUser}
      deactivateUser={deactivateUser}
    />
    <EmployeesDOB activeUsers={activeUsers} />
  </div>
);

Employees.displayName = "Employees";
Employees.propTypes = {
  activeUsers: usersArrPropType.isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
};

export default Employees;
