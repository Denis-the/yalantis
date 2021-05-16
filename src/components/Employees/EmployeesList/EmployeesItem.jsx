import React from "react";
import PropTypes from "prop-types";

const EmployeesItem = React.memo(
  ({ user, activateUser, deactivateUser, isActive }) => {
    return (
      <div className="empl__item">
        <h4 className={"item__name" + (isActive ? " active" : "")}>
          {user.lastName} {user.firstName}
        </h4>
        <div>
          <div>
            <input
              type="radio"
              id={"inactive-" + user.id}
              name={user.id}
              checked={!isActive}
              onChange={() => deactivateUser(user.id)}
            />
            <label htmlFor={"inactive-" + user.id}>not active</label>
          </div>
          <div>
            <input
              type="radio"
              id={"active-" + user.id}
              name={user.id}
              checked={isActive}
              onChange={() => activateUser(user.id)}
            />
            <label htmlFor={"active-" + user.id}>active</label>
          </div>
        </div>
      </div>
    );
  }
);

EmployeesItem.displayName = "EmployeesItem";
EmployeesItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string,
  }),
  activateUser: PropTypes.func,
  deactivateUser: PropTypes.func,
  isActive: PropTypes.bool,
};

export default EmployeesItem;
