import { useState, useReducer, useRef } from "react";
// useReducer
// 1. Init state
const initState = {
  job: "",
  jobs: [],
};
// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job !== action.payload),
      };
    default:
      throw new Error("Invalid action ");
  }
};
// 4. Dispatch
function TodoListComponent() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();
  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  const handleDeleteJob = (job) => {
    dispatch(deleteJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  const { job, jobs } = state;
  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        value={job}
        ref={inputRef}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => handleDeleteJob(job)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoListComponent;
