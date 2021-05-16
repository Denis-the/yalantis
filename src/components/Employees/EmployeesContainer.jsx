import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSelectUser, useUnselectUser } from "../../hooks/employees";
import { fetchUsers, setActiveUsersId } from "../../redux/employeesReducer";
import { getActiveUsers } from "../../redux/selectors/employeesSel";
import { getSessionStorageActiveUsersId } from "../../utils/sessionStorage";
import Employees from "./Employees";

const EmployeesContainer = React.memo(() => {
  const dispatch = useDispatch();
  const activeUsers = useSelector(getActiveUsers);
  const activateUser = useSelectUser();
  const deactivateUser = useUnselectUser();

  useEffect(() => {
    dispatch(fetchUsers());
    const cachedActiveUsersId = getSessionStorageActiveUsersId();
    dispatch(setActiveUsersId(cachedActiveUsersId));
  }, []);

  return (
    <Employees
      activeUsers={activeUsers}
      activateUser={activateUser}
      deactivateUser={deactivateUser}
    />
  );
});

EmployeesContainer.displayName = "EmployeesContainer";

export default EmployeesContainer;
