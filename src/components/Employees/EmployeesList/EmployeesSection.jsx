import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getSortedUsersFiltratedByLetterCreator } from "../../../redux/selectors/employeesSel";
import EmployeesItem from "./EmployeesItem";
import { usersArrPropType, letterPropType } from "../../../utils/employeesPropTypes";


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
                isActive={activeUsers.includes(u)}
              />
            ))
          : "-----"}
      </div>
    );
  }
);

EmployeesSection.displayName = "EmployeesSection";
EmployeesSection.defaultProps = {
  letter: null,
}

EmployeesSection.propTypes = {
  letter: letterPropType,
  activeUsers: usersArrPropType.isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
};

export default EmployeesSection;
