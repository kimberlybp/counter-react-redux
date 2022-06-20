export const CounterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_BY_AMOUNT: "INCREMENT_BY_AMOUNT",
  INCREMENT_ASYNC: "INCREMENT_ASYNC",
  RESET: "RESET"
}

export function increment() {
  return {
    type: CounterActionTypes.INCREMENT
  }
}

export function decrement() {
  return {
    type: CounterActionTypes.DECREMENT
  }
}

export function incrementByAmount(payload: number) {
  return {
    type: CounterActionTypes.INCREMENT_BY_AMOUNT,
    payload
  }
}

export function incrementAsync(payload: number) {
  return {
    type: CounterActionTypes.INCREMENT_ASYNC,
    payload
  }
}

export function reset() {
  return {
    type: CounterActionTypes.RESET
  }
}