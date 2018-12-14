import { TRANSFER_DONE } from "../actions/types";
const initialState = {
  data: {}
};

//Transfer Tokens
export default function(state = initialState, action) {
  switch (action.type) {
    case TRANSFER_DONE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
