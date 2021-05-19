import { createSelector } from "reselect";

export const getUsers = (state) => state.employees.users;
export const getActiveUsersId = (state) => state.employees.activeUsersId;

export const getSortedByLastNameUsers = createSelector(getUsers, (users) =>
  users.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  })
);

export const getSortedUsersFiltratedByLetterCreator = (letter) =>
  createSelector(getSortedByLastNameUsers, (users) =>
    users.filter((user) => user.lastName[0] === letter)
  );

export const getActiveUsers = createSelector(
  getSortedByLastNameUsers,
  getActiveUsersId,
  (users, activeUsersId) => users.filter((user) => activeUsersId.has(user.id))
);
