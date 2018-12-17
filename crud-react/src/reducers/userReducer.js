import { REGISTRATION_DONE, UPDATION_DONE, DELETION_DONE, VIEW_DONE } from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_DONE:
      return {
        ...state,
        data: action.payload
      };
    case UPDATION_DONE:
      return {
        ...state,
        data: action.payload
      };
    case DELETION_DONE:
      return {
        ...state,
        data: action.payload
      };
    case VIEW_DONE:
      return {
        ...state,
        data: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
