import {useState, useEffect} from "react";

function App2() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);_
    return (
    <div>
    <button>{showing ? "Hide" : "Show"}</button>
    </div>
    );
}

export default App2;