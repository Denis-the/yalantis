import React from "react";
import PropTypes from "prop-types";
import { userPropType } from "../../../utils/employeesPropTypes";

const EmployeesItem = React.memo(
  ({ user, activateUser, deactivateUser, isActive }) => (
    <div className="empl__item">
      <h4 className={isActive ? "item__name active" : "item__name"}>
        {user.lastName} {user.firstName}
      </h4>
      <div>
        <div>
          <label htmlFor={`inactive-${user.id}`}>
            <input
              type="radio"
              id={`inactive-${user.id}`}
              name={user.id}
              checked={!isActive}
              onChange={() => deactivateUser(user.id)}
            />
            not active
          </label>
        </div>
        <div>
          <label htmlFor={`active-${user.id}`}>
            <input
              type="radio"
              id={`active-${user.id}`}
              name={user.id}
              checked={isActive}
              onChange={() => activateUser(user.id)}
            />
            active
          </label>
        </div>
      </div>
    </div>
  )
);

EmployeesItem.displayName = "EmployeesItem";
EmployeesItem.propTypes = {
  user: userPropType.isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default EmployeesItem;
