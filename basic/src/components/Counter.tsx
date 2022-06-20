import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterState } from '../store/counter/types';
import styles from './Counter.module.css';
import { increment, decrement, incrementByAmount, incrementAsync, reset } from '../store/counter/actions';

interface RootState {
  counter: CounterState
}

export function Counter() {
  const count = useSelector<RootState, number>(state => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  // A mock function to mimic making an async request for data
  function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 1000)
    );
  }


  const onAsyncClick = async (amount :number) => {
    const response = await fetchCount(amount);
    dispatch(incrementAsync(response.data));
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => onAsyncClick(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
