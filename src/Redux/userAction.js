import { GET_USERS_REQUESTED } from "./constants";

export function getUsers(data) {
  console.log(data, "user action");
  return {
    type: GET_USERS_REQUESTED,
    payload: data.id,
  };
}
