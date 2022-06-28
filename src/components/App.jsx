import React, {useState} from "react";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handelChange(event) {
        const newValue = event.target.value;
        setInputText(newValue)
    }
    function addItem() {
      if(inputText){
        setItems((prevValue) => {
            return [
                ...prevValue,
                inputText
            ];
        });
        setInputText("");
      }else {
        alert("Please input to do.");
        return false;
      }
    }
return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input type="text" onChange={handelChange} value={inputText}/>
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
                {items.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    </div>
);
}

export default App;
