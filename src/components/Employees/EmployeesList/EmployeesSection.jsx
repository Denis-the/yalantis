import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getSortedUsersFiltratedByLetterCreator } from "../../../redux/selectors/employeesSel";
import EmployeesItem from "./EmployeesItem";

const EmployeesSection = React.memo(
  ({ letter, activeUsers, activateUser, deactivateUser }) => {
    const filteredUsers = useSelector(
      getSortedUsersFiltratedByLetterCreator(letter)
    );
    return (
      <div className="empl__section">
        <h2 className="section__header">{letter}</h2>
        {filteredUsers.length
          ? filteredUsers.map((u) => (
              <EmployeesItem
                key={u.id}
                user={u}
                activateUser={activateUser}
                deactivateUser={deactivateUser}
                isActive={activeUsers.find(item => item === u) || false}
              />
            ))
          : "-----"}
      </div>
    );
  }
);

EmployeesSection.displayName = "EmployeesSection";
EmployeesSection.propTypes = {
 letter: (({letter}, propName) => {
    if (typeof letter !== "string" || letter.length !== 1) {
      return new Error(
        `Invalid prop "${propName}" of component "EmployeesSection", expected string with length = 1`
      );
    }
    return null;
  }).isRequired,
  activeUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
};

export default EmployeesSection;
