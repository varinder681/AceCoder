import React, { useEffect, useState } from "react";
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
      quill.disable()
  };
  const enableUserInput = () => {
    quill.enable()
};

  return (
    <>
      <div
        id="texteditor"
        style={{ width: "100%", position: "relative" }}
      ></div>
      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <button onClick={getContents}>get Contents</button>
        <button onClick={saveContents}>save Contents</button>
        <button onClick={retreiveContents}>retreive Contents</button>
        <button onClick={disableUserInput}>disable user input</button>
        <button onClick={enableUserInput}>enable user input</button>
      </div>
    </>
  );
};

export default TextEditor;
