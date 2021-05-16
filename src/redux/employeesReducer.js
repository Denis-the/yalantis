import { api } from "../api/api";

const SET_USERS = "yalantis/employees/SET_USERS";
const SET_ACTIVE_USERS_ID = "yalantis/employees/SET_ACTIVE_USERS_ID";
const ADD_ACTIVE_USER = "yalantis/employees/ADD_ACTIVE_USER";
const REMOVE_ACTIVE_USER = "yalantis/employees/REMOVE_ACTIVE_USER";

const initialState = {
  users: [],
  activeUsersId: new Set(),
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.payload };
    }
    case SET_ACTIVE_USERS_ID: {
      const activeUsersIdCopy = new Set(action.payload);
      return { ...state, activeUsersId: activeUsersIdCopy };
    }
    case ADD_ACTIVE_USER: {
      const activeUsersIdCopy = new Set(state.activeUsersId);
      activeUsersIdCopy.add(action.payload);
      return { ...state, activeUsersId: activeUsersIdCopy };
    }
    case REMOVE_ACTIVE_USER: {
      const activeUsersIdCopy = new Set(state.activeUsersId);
      activeUsersIdCopy.delete(action.payload);
      return { ...state, activeUsersId: activeUsersIdCopy };
    }

    default:
      return state;
  }
};

// action creators
export const setUsers = (users) => ({ type: SET_USERS, payload: users });
export const setActiveUsersId = (ids) => ({
  type: SET_ACTIVE_USERS_ID,
  payload: ids,
});
export const addActiveUser = (userId) => ({
  type: ADD_ACTIVE_USER,
  payload: userId,
});
export const removeActiveUser = (userId) => ({
  type: REMOVE_ACTIVE_USER,
  payload: userId,
});

// thunks
export const fetchUsers = () => async (dispatch) => {
  const response = await api.requestUsers();
  const users = response.data;
  dispatch(setUsers(users));
};

export default employeesReducer;
