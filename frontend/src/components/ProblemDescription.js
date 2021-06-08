import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { Grid, Button,ButtonGroup } from "@material-ui/core";
import Quill from "quill";
import { useDispatch, useSelector } from "react-redux";
import { getProblemBySearchTitle } from "../actions/problemsActions";

import "quill/dist/quill.snow.css";

const ProblemDescription = ({ match, history }) => {
  const dispatch = useDispatch();
  const [quill, setQuill] = useState(null);
  const getProblem = useSelector((state) => state.getProblem);
  const { problem, loading, error, success } = getProblem;

  const createQuill = () => {
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
    setQuill(q);
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
      const q = createQuill();
      q.setContents(problem.description);
      q.disable();
    }
  }, [success, problem]);
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          <Grid container>
            <Grid item>
              <ButtonGroup>
                <Button variant="contained" >Description</Button>
                <Button variant="contained" >Solution</Button>
                <Button variant="contained" >Discuss</Button>
                <Button variant="contained" >Submissions</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <div style={{ width: "100%", padding: "1rem" }}>
            {problem ? problem.title : ""}
          </div>
          <div id="problem-description-view" style={{ width: "100%" }}></div>
          <div style={{ padding: "1rem" }}>show contributors</div>
        </>
      )}
    </>
  );
};

export default ProblemDescription;
