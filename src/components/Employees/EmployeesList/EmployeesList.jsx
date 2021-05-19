import React from "react";
import PropTypes from "prop-types";
import EmployeesSection from "./EmployeesSection";

const alfabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const EmployeesList = React.memo(
  ({ activeUsers, activateUser, deactivateUser }) => (
    <div className="empl">
      <h2 className="header">Employees</h2>
      <div className="empl__list">
        {alfabet.map((letter) => (
          <EmployeesSection
            key={letter}
            letter={letter}
            activeUsers={activeUsers}
            activateUser={activateUser}
            deactivateUser={deactivateUser}
          />
        ))}
      </div>
    </div>
  )
);

EmployeesList.displayName = "EmployeesList";
EmployeesList.propTypes = {
  activeUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
};

export default EmployeesList;
