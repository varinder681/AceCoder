import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { getOutput } from "../actions/output";
import CustomSelect from "../components/CustomSelect";
import { java, cpp, python3 } from "../codeDefault/codeDefault";
import { Button } from "@material-ui/core";
import { Code as CodeIcon, DoneAll as DoneAllIcon } from "@material-ui/icons";

import { makeStyles,CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
}));

const EditorScreen = () => {
  const classes = useStyles();

  const [javaDefault, setJavaDefault] = useState(java);

  const [python3Default, setPython3Default] = useState(python3);

  const [cppDefault, setCppDefault] = useState(cpp);

  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [language, setLanguage] = useState("java");

  useEffect(() => {
    if (language === "java") setValue(javaDefault);
    else if (language === "cpp") {
      setValue(cppDefault);
    } else if (language === "python3") {
      setValue(python3Default);
    }
  }, [language, javaDefault, cppDefault, python3Default]);

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    setLanguage(e.target.value);
    if (e.target.name === "java") {
      setValue(javaDefault);
    } else if (language === "cpp") {
      setValue(cppDefault);
    } else if (language === "python3") {
      setValue(python3Default);
    }
  };

  const handleEditorValueChange = (value) => {
    setValue(value);
    if (language === "java") {
      setJavaDefault(value);
    } else if (language === "cpp") {
      setCppDefault(value);
    } else if (language === "python3") {
      setPython3Default(value);
    }
  };

  const handleCompile = async () => {
    setIsCompiling(true);
    // console.log(language);
    // console.log(value);
    const data = await getOutput(value, language);
    setIsCompiling(false);
    setOutput(data.output);
  };

  const handleSubmiting = async () => {
    setIsSubmitting(true);
    // console.log(language);
    // console.log(value);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);

    // setOutput(data.output);
  };

  return (
    <div
      className="editor"
      style={{
        width: "70vw",
        height: "100vh",
        padding: "20px 30px 300px",
        margin: "auto",
      }}
    >
      <div className="backdropBlack"></div>

      <div>
        <CustomSelect
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
      </div>

      <Editor
        height="60vh"
        defaultLanguage={language}
        defaultValue="// some comment"
        theme="vs-dark"
        value={value}
        onChange={handleEditorValueChange}
      />
      <div
        style={{
          paddingBottom: "10px",
          paddingTop: "10px",
          textAlign: "right",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleCompile}
          disabled={isCompiling || isSubmitting}
          style={{
            outline: "none",
            minWidth: "100px",
            marginRight: "5px",
            minHeigth: "24px",
          }}
          startIcon={isCompiling ? null : <CodeIcon />}
        >
          {isCompiling ? (
            <CircularProgress size="1.5rem" />
          ) : (
            "Compile"
          )}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmiting}
          className={classes.submit}
          disabled={isSubmitting || isCompiling}
          startIcon={isSubmitting ? null : <DoneAllIcon />}
        >

          {isSubmitting ? (
            <CircularProgress size="1.5rem" />
              
          ) : (
            "Submit"
          )}
        </Button>
      </div>
      <div>
        <label style={{ display: "block", color: "black" }}>Output</label>
        <textarea
          rows={4}
          id="output"
          value={output}
          readOnly
          style={{ width: "100%", height: "100px" }}
        />
      </div>
    </div>
  );
};

export default EditorScreen;
