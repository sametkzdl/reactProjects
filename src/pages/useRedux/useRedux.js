import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByPayload,
} from "../../redux/counterSlice";
import { useEffect, useRef } from "react";
import { getAllUsers } from "../../redux/usersSlice";

const UseRedux = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.counter);
  const users = useSelector((store) => store.users.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <h2>UseRedux</h2>
      <h4>{data.value}</h4>
      <button onClick={() => dispatch(increment())}>Artır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <div>
        <input ref={inputRef} name="isim" type="number" />
        <button
          onClick={() => {
            dispatch(incrementByPayload(Number(inputRef.current.value)));
            inputRef.current.value = "";
          }}
        >
          Send Selected Value
        </button>
        {users.map((users) => {
          return <div key={users.name}>{users.name}</div>;
        })}
      </div>
    </div>
  );
};

export default UseRedux;
