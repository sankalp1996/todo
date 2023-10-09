import React, { useEffect, useState,useRef } from "react";

const Main = () => {
  let [new_input, onAdd] = useState([]);

  const [my_input, setNewValue] = useState("");
  const ref1 = useRef(0);

  const setValue = (e) => {

    setNewValue(e.target.value);
  };

  const addNew = () => {
    // setTasks([...tasks, my_input]);
    if (my_input.length > 0) {
      onAdd([...new_input, my_input]);
      setNewValue("");
    }
  };

  const deleteTask = (my_index) => {
    // console.log("This is index=>",my_index)
    new_input.splice(my_index, 1);
    onAdd([...new_input]);
  };

  const editTask = (my_index, my_input) => {
    new_input.splice(my_index, 1, my_input);
    onAdd([...new_input]);

  };
 

  useEffect(() => {
    // console.log(my_input);
  ref1.current.focus();

    console.log(new_input); // Log the updated value when new_input changes
  }, [new_input]);

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
                ref={ref1}
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
              <div className="d-flex">
                <ol className="w-100 p-3">
                  {new_input.map((task, index) => (
                    <li
                      className="d-flex justify-content-between align-items-center w-100 p-3"
                      key={index}
                    >
                      <span>
                        {index + 1}. {task}
                      </span>
                      <button
                        className="btn btn-success"
                        type="button"
                        // onClick={(index)=>{deleteTask(index)}}
                        onClick={() => {
                          editTask(index, my_input);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        type="button"
                        // onClick={(index)=>{deleteTask(index)}}
                        onClick={() => {
                          deleteTask(index);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
