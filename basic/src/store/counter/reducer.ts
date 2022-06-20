import { CounterActionTypes } from "./actions";
import { CounterState } from "./types";

const initial_state: CounterState = {
  count: 0
}

const reducer = (state: CounterState = initial_state, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case CounterActionTypes.INCREMENT:
      return { count: state.count + 1 }
    case CounterActionTypes.DECREMENT:
      return { count: state.count - 1 }
    case CounterActionTypes.INCREMENT_BY_AMOUNT: 
      return { count: state.count + payload }
    case CounterActionTypes.INCREMENT_ASYNC: 
      return { count: state.count + payload }
    case CounterActionTypes.RESET: 
      return initial_state
    default:
      return state;
  }
}

export default reducer;