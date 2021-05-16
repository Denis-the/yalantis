import React from "react";
import { useSelector } from "react-redux";
import { getSortedUsersFiltratedByLetterCreator } from "../../../redux/selectors/employeesSel";
import PropTypes from "prop-types";
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
                isActive={activeUsers.has(u)}
              />
            ))
          : "-----"}
      </div>
    );
  }
);

EmployeesSection.displayName = "EmployeesSection";
EmployeesSection.propTypes = {
  letter: function (props, propName, componentName) {
    if (typeof props.letter !== "string" || props.letter.length !== 1) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` of component `EmployeesSection`, expected string with length = 1"
      );
    }
  },
  activeUsers: PropTypes.instanceOf(Set),
  activateUser: PropTypes.func,
  deactivateUser: PropTypes.func,
};

export default EmployeesSection;
