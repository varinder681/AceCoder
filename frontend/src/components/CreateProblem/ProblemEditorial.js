import React from "react";
import { useDispatch,useSelector } from "react-redux";

import { handleTitleChange } from "../../actions/createProblemActions";

import TextEditor from "./TextEditor/TextEditor";

const CreateProblemEditorial = () => {
  const dispatch = useDispatch();

  const createProblem = useSelector(state => state.createProblem) 
  const {title} = createProblem

  const handleChange = (e) => {
    dispatch(handleTitleChange(e.target.value));
  };

  return (
    <>
      <input
        onChange={handleChange}
        value={title}
        style={{ width: "100%", height: "5%",marginBottom : '1rem' }}
      />
      <TextEditor id="problem-editorial" />
    </>
  );
};

export default CreateProblemEditorial;
