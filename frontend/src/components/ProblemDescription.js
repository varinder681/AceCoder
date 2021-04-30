import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { handleTitleChange } from "../actions/createProblemActions";

import TextEditor from "./TextEditor/TextEditor";

const ProblemDescription = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    dispatch(handleTitleChange(e.target.value));
  };

  return (
    <>
      <input
        onChange={handleChange}
        value={title}
        style={{ width: "100%", height: "5%",marginBottom : '1rem' }}
      />
      <TextEditor id="problem-description" />
    </>
  );
};

export default ProblemDescription;
