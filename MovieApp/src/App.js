import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import App2 from "./App2";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onChange = (event) => setKeyword(event.target.value);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("I run all the time");
    useEffect(() => {
        console.log("I run only once");
    }, []); // 시작 할때 한번만 실행 됨
    useEffect(() => {
        if (keyword !== "" & keyword.length > 5){
        console.log("Search for", keyword);
        }
    },  [keyword]); // keyword가 변할때 실행됨(조건이 충족하면)
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]); // counter가 변하면 실행됨
  return (
      <div>
        <input value={keyword}
               onChange={onChange}
               type="text"
               placeholder="Search Here...." />
        <h1>{counter}</h1>
          <button onClick={onClick}>click me!!</button>
        {/*<Button  text={"Continue"} />*/}
      <App2 />
      </div>
  );
}

export default App;
