import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Quill from "quill";

import "quill/dist/quill.snow.css";
import "./TextEditor.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ size: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "link", "video", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor = ({ setContent }) => {
  const [quill, setQuill] = useState(null);

  const createQuill = () => {
    const div = document.getElementById("texteditor");
    if (div) {
      div.innerHTML = null;
      const editor = document.createElement("div");
      editor.setAttribute("spellcheck", "false");
      editor.classList.add("editor");
      div.appendChild(editor);
    }

    const q = new Quill(".editor", {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
      },
      // readOnly : true
    });

    q.on("text-change", (delta, oldDelta, source) => {});
    q.setText(`Write the Problem Description here...`)
    setQuill(q);
  };

  useEffect(() => {
    createQuill();
  }, []);

  const getContents = () => {
    console.log(quill.getContents());
  };

  const saveContents = () => {
    const delta = JSON.stringify(quill.getContents());

    localStorage.setItem("delta", delta);
  };

  const retreiveContents = () => {
    const delta = JSON.parse(localStorage.getItem("delta"));
    quill.setContents(delta, "user");
  };

  const disableUserInput = () => {
    quill.disable();
  };
  const enableUserInput = () => {
    quill.enable();
  };

  return (
    <>
      <Grid container item style={{ height: "100%",minHeight : '400px'  }}>
        <Grid container item xs={12} style={{height : '10%'}}>
          <input
            placeholder="Title"
            style={{ height: "2rem", width: "100%", }}
          ></input>
        </Grid>
        <Grid
          item
          xs={9}
          id="texteditor"
          style={{ height: "90%"}}
        ></Grid>

        <Grid container item xs={3}>

          <Grid container style={{height : '50%',border : '1px solid black',boxSizing : 'border-box'}} item xs={12}>
            
          </Grid>

          <Grid container style={{height : '50%', border : '1px solid black',boxSizing : 'border-box'}} item xs={12} direction='column'>
            <Grid item>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                onClick={getContents}
              >
                get
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                onClick={saveContents}
              >
                save
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                onClick={retreiveContents}
              >
                retreive
              </Button>
            </Grid>

            <Grid item>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                onClick={disableUserInput}
              >
                disable
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                onClick={enableUserInput}
              >
                enable
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TextEditor;
