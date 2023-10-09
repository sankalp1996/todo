import React, { useEffect, useState } from "react";

const Main = () => {
//   const [new_input, onAdd] = useState("");
  // let new_input =""
  let [new_input, setNewInput] = useState("");
  
  const [my_input, setNewValue] = useState("");

  const setValue = (e) => {
    setNewValue(e.target.value);
  };

  const addNew = () =>
   {
    setNewInput(new_input +","+ my_input)
    // new_input = new_input === "" ? my_input : new_input + "," + my_input;
    // new_input = new_input + "," + my_input
    setNewValue("");
  };

  useEffect(() => {
    // console.log(my_input);
    console.log(new_input); // Log the updated value when new_input changes
  }, [new_input])
  return (
    <>
      <div className="container">
        <header id="" className="bg-warning text-white p-4">
          <div className="row">
            <div className="col-md-10">
              <i className="fa-solid fa-pencil" />
              <h1>To-Do App</h1>
            </div>
          </div>
        </header>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add New Task</h5>
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter here...."
                aria-label=".form-control-lg example"
                name="my_input"
                id="my_input"
                value={my_input}
                onChange={setValue}
              />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={addNew}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">List Of tasks</h5>
            <div className="row">
            <div className="col-md-1">
                
            </div>
          </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
