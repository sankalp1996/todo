import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNew, deleteTask } from "../slice/taskSlice";

const Main = () => {
  // let [new_input, onAdd] = useState([]);
  const [my_input, setNewValue] = useState("");
  const setValue = (e) => {
    setNewValue(e.target.value);
  };

  const dispatch = useDispatch();
  const myTask = useSelector((state) => state.addNew);
  console.log("myTask-",myTask)
  const ref1 = useRef(0);

  const handleAddNew = () => {
    if (my_input.length > 0) {
      dispatch(addNew(my_input));
      setNewValue("");
      ref1.current.focus();
    }
  };

  // const editTask = (my_index, my_input) => {
  //   new_input.splice(my_index, 1, my_input);
  //   onAdd([...new_input]);

  // };

  useEffect(() => {
    // console.log(my_input);
    ref1.current.focus();

    // console.log("new_input", my_input); // Log the updated value when new_input changes
  }, [my_input]);

  return (
    <>
      <div className="container">
        <header id="" className="bg-warning text-white p-4">
          <div className="row">
            <div className="col-md-10">
              <i className="fa-solid fa-pencil" />
              <h1>To-Do App 3</h1>
            </div>
          </div>
        </header>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add New Task...</h5>
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
                onClick={handleAddNew}
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
                  {myTask.map((task, index) => (
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
                        // onClick={() => {
                        //   editTask(index, my_input);
                        // }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        type="button"
                        // onClick={(index)=>{deleteTask(index)}}
                        onClick={() => {
                          dispatch(deleteTask(index));
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
