import React, { useEffect, useState } from "react";

import { Grid, Button } from "@material-ui/core";
import Quill from "quill";
import hljs from 'highlight.js'
import { useDispatch, useSelector } from "react-redux";
import { getProblemBySearchTitle } from "../actions/problemsActions";

import "quill/dist/quill.snow.css";
import 'highlight.js/styles/github-gist.css'

const ProblemDescription = ({ match, history }) => {
  const dispatch = useDispatch();
  const [quillDescription, setQuillDescription] = useState(null);
  const [quillEditorial, setQuillEditorial] = useState(null);
  const [view, setView] = useState("description");
  const getProblem = useSelector((state) => state.getProblem);
  const { problem, loading, error, success } = getProblem;

  const createQuillDescription = () => {
    const div = document.getElementById("problem-description-view");
    if (div) {
      div.innerHTML = null;
      const editor = document.createElement("div");
      editor.setAttribute("spellcheck", "false");
      editor.classList.add("description-view");
      div.appendChild(editor);
    }

    const q = new Quill(".description-view", {
      theme: "snow",
      modules: { toolbar: false },
      //   readOnly : true
    });

    q.on("text-change", (delta, oldDelta, source) => {});
    q.setText("description");
    setQuillDescription(q);
    return q;
  };

  const createQuillEditorial = () => {
    const div = document.getElementById("problem-editorial");
    if (div) {
      div.innerHTML = null;
      const editor = document.createElement("div");
      editor.setAttribute("spellcheck", "false");
      editor.classList.add("editorial");
      div.appendChild(editor);
    }

    const q = new Quill(".editorial", {
      theme: "snow",
      modules: { 
        toolbar: false,
        syntax : {
          highlight : text => hljs.highlightAuto(text).value 
        }
      },

      //   readOnly : true
    });
    q.setText("Editorial");
    setQuillEditorial(q);
    return q;
  };

  const getData = () => {
    dispatch(getProblemBySearchTitle(match.params.title));
  };

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (success) {
      const qDescription = createQuillDescription();
      qDescription.setContents(problem.description);
      setQuillDescription(qDescription);
      qDescription.disable();

      const qEditorial = createQuillEditorial();
      qEditorial.setContents(problem.editorial);
      setQuillEditorial(qEditorial);
      qEditorial.disable();

    }
  }, [success, problem]);
  
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <Grid container alignItems="flex-start">
          <Grid container>
            <Grid container item>
                <Button variant="contained" onClick={()=>{
                  setView("description")
                }}>Description</Button>
                <Button variant="contained" onClick={()=>{
                  setView("editorial")
                }}>Editorial</Button>
                <Button variant="contained" onClick={()=>{
                  setView("discuss")
                }}>Discuss</Button>
                <Button variant="contained" onClick={()=>{
                  setView("submissions")
                }}>Submissions</Button>
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start">
            <div style={{ width: "100%", padding: "1rem" }}>
              {problem ? problem.title : ""}
            </div>
            <div id="problem-description-view" style={{ width: "100%", display: view==="description" ? "block" : "none" }}></div>
            <div id="problem-editorial" style={{ width: "100%", display: view==="editorial" ? "block" : "none" }}></div>
            <div id="problem-editorial" style={{ width: "100%", display: view==="discuss" ? "block" : "none" }}>Discuss feature will be added soon...</div>
            <div id="problem-editorial" style={{ width: "100%", display: view==="submissions" ? "block" : "none" }}>Submissions feature will be added soon</div>
            <div style={{ padding: "1rem" }}>show contributors</div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProblemDescription;
