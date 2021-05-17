import React from "react";
import PropTypes from "prop-types";
import EmployeesList from "./EmployeesList/EmployeesList";
import EmployeesDOB from "./EmployeesDOB/EmployeesDOB";

const Employees = ({ activeUsers, activateUser, deactivateUser }) => {
  return (
    <div className="empl__container">
      <EmployeesList
        activeUsers={activeUsers}
        activateUser={activateUser}
        deactivateUser={deactivateUser}
      />
      <EmployeesDOB
        activeUsers={activeUsers}
      />
    </div>
  );
};

Employees.displayName = "Employees";
Employees.propTypes = {
  activeUsers: PropTypes.array,
  activateUser: PropTypes.func,
  deactivateUser: PropTypes.func,
};

export default Employees;
