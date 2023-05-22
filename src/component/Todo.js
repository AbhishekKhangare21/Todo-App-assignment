import { useState } from "react";
import "../App.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //Adding item
  const addItem = () => {
    if (!inputData) {
      alert("Add Items");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  //Deleting item
  const deleteItem = (ind) => {
    const updatedData = items.filter((elem, id) => {
      return id != ind;
    });

    setItems(updatedData);
  };

  //Removing All items
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/img.png" alt="not found" />
            <figcaption>Todo App</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              className="fa-sharp fa-solid fa-plus todo-btn"
              title="Add Item"
              onClick={() => addItem()}
            />
          </div>
          {/* mapping items array */}
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i
                    className="fa  fa-trash  add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  />
                </div>
              );
            })}
          </div>
          {/* clear all button */}
          <div className="RemoveItems">
            <button className="btn effect04" onClick={() => removeAll()}>
              <span>REMOVE ALL</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
