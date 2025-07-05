import { decrement, increment } from "./redux/featuer/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/featuer/hooks";
import type { RootState } from "./redux/store";

function App() {
  const { counter } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = (inc: number) => {
    dispatch(increment(inc));
  };
  const handleDerement = (dec: number) => {
    dispatch(decrement(dec));
  };

  return (
    <div>
      <h1>Counter App with Redux TypeScript</h1>
      <div>
        <div>
          <div>
            <button onClick={() => handleIncrement(1)}>
              Increment
            </button>
            <p>{counter}</p> 
            <button onClick={() => handleDerement(1)}>
              Decrement
            </button>
          </div>
          <div>
            <button onClick={() => handleIncrement(5)}>
              Increment by 5
            </button>
            <button onClick={() => handleDerement(3)}>
              Decrement by 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
