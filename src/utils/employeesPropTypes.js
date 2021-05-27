import { PropTypes } from "prop-types";

export const userPropType = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dob: PropTypes.string,
});

export const usersArrPropType = PropTypes.arrayOf(userPropType);


export function letterPropType({ letter }, propName){
  let error;
  if (typeof letter !== "string" || letter.length !== 1) {
    error = new Error(
      `Invalid prop "${propName}" of component "EmployeesSection", expected string with length = 1`
    );
  }
  return error;
};
