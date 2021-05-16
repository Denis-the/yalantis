import React from "react";
import PropTypes from "prop-types";
import EmployeesList from "./EmployeesList/EmployeesList";

const Employees = ({ activeUsers, activateUser, deactivateUser }) => {
  return (
    <div className="empl__container">
      <EmployeesList
        activeUsers={activeUsers}
        activateUser={activateUser}
        deactivateUser={deactivateUser}
      />
    </div>
  );
};

Employees.displayName = "Employees";
Employees.propTypes = {
  activeUsers: PropTypes.instanceOf(Set),
  activateUser: PropTypes.func,
  deactivateUser: PropTypes.func,
};

export default Employees;
