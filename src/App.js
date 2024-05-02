import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  let data = useSelector((state) => state?.userData);

  console.log(data);

  async function fetchData(dispatch, getState) {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/2");

    let data = await res.json();

    dispatch({ type: "add", payload: data });
  }

  return (
    <>
      <div>id :{data?.id}</div>
      <div>name :{data?.name}</div>
      <div>mobile :{data?.phone}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(fetchData);
        }}
      >
        Get
      </button>
    </>
  );
}

export default App;
