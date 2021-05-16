import React from "react";
import PropTypes from "prop-types";
import EmployeesSection from './EmployeesSection'

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
  ({ activeUsers, activateUser, deactivateUser }) => {
    return (
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
    );
  }
);

EmployeesList.displayName = 'EmployeesList';
EmployeesList.propTypes = {
  activeUsers: PropTypes.instanceOf(Set),
  activateUser: PropTypes.func,
  deactivateUser: PropTypes.func,
};

export default EmployeesList;
