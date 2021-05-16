import { useDispatch } from "react-redux";
import { addActiveUser, removeActiveUser } from "../redux/employeesReducer";
import {
  addSessionStorageActiveUserId,
  removeSessionStorageActiveUserId,
} from "../utils/sessionStorage";

export const useSelectUser = () => {
  const dispatch = useDispatch();

  return (userId) => {
    dispatch(addActiveUser(userId));
    addSessionStorageActiveUserId(userId);
  };
};

export const useUnselectUser = () => {
  const dispatch = useDispatch();
  return (userId) => {
    dispatch(removeActiveUser(userId));
    removeSessionStorageActiveUserId(userId);
  };
};
