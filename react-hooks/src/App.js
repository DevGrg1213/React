import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import axios from "axios";
import "./App.css";

function App() {
  ////////////////////////////
  //------- useState--------
  /////////////////////////
  /*
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
  */
  ////////////////////////////
  //------- useReducer-------
  /////////////////////////
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "increment":
  //       return { count: state.count + 1, showText: state.showText };
  //     case "toggleShowText":
  //       return { count: state.count, showText: !state.showText };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, {
  //   count: 0,
  //   showText: true,
  // });
  // return (
  //   <div className="App">
  //     {state.count}
  //     <button
  //       onClick={() => {
  //         dispatch({ type: "increment" });
  //         dispatch({ type: "toggleShowText" });
  //       }}
  //     >
  //       try me
  //     </button>
  //     {state.showText && <p>click above</p>}
  //   </div>
  // );
  // ------------------------------------------------------------------------------------------------------
  ////////////////////////////
  //------- useEffect-------
  /////////////////////////
  /*

  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log(res);
      return setData(res.data[0].body);
    });
  }, [counter]);

  return (
    <div>
      <h1>Data</h1>
      <p>{data}</p>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );

*/
  ////////////////////////////
  //------- useRef-------
  /////////////////////////
  /*
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Demonstrating useRef Hook</h1>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>press me</button>
    </div>
  );
*/
  ////////////////////////////
  //-------useLayourEffect--
  /////////////////////////
  /*
  const inputRef = useRef(null);

  const style = {
    width: "100%",
    padding: "20px",
    fontSize: "16px",
  };

  useLayoutEffect(() => {
    // this is called before content is load
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    // this is called after content is load
    inputRef.current.value = "useEffect";
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Hello" style={style} />
    </div>
  );


  */


  
}

export default App;
