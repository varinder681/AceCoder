import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useStyles from './EditorScreen.Styles'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-textmate";

import { getOutput } from "../actions/output";
import { java, cpp, python3 } from "../codeDefault/codeDefault";
import { Button } from "@material-ui/core";
import {
  Code as CodeIcon,
  DoneAll as DoneAllIcon,
  ArrowDropDown,
} from "@material-ui/icons";

import { CircularProgress, Menu, MenuItem } from "@material-ui/core";


const onLoad = (e) => {
  // console.log("editor loaded");  
};

const languages = [
  {name : 'Java', code: 'java'},
  {name : 'C++' , code: 'cpp'},
  {name : 'Python 3', code : 'python3'}
]

const EditorScreen = () => {
  const classes = useStyles();

  const [javaDefault, setJavaDefault] = useState(java);

  const [python3Default, setPython3Default] = useState(python3);

  const [cppDefault, setCppDefault] = useState(cpp);

  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [showTestcase, setShowTestcase] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [output, setOutput] = useState(null);
  const [showConsole, setShowConsole] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [language, setLanguage] = useState("java");
  const [mode, setMode] = useState("java");
  const [anchorEl, setAnchorEl] = useState(null);

  const getSelectedLanguageName = () => {
    switch (language) {
      case "cpp":
        return "C++";
      case "python3":
        return "Python 3";
      default:
        return "Java";
    }
  };

  useEffect(() => {
    if (language === "java") setValue(javaDefault);
    else if (language === "cpp") {
      setValue(cppDefault);
    } else if (language === "python3") {
      setValue(python3Default);
    }
  }, [language, javaDefault, cppDefault, python3Default]);

  const handleLanguageChange = (lang) => {
    // console.log(e.target.value);
    setLanguage(lang);

    if (lang === "java") {
      setMode("java");
      setValue(javaDefault);
    } else if (lang === "cpp") {
      setMode("c_cpp");
      setValue(cppDefault);
    } else if (lang === "python3") {
      setMode("python");
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
    const data = await getOutput(value, language,input);
    setIsCompiling(false);
    setShowConsole(true);
    setShowResult(true);
    setShowTestcase(false);
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

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const testcasePanel = (
    <>
      <Grid container justify='center' direction='column' alignItems='center'>
        <textarea onChange={ e => setInput(e.target.value)} value={input} spellCheck='false' style={{height : '50%', width : '80%', resize: 'none'}}></textarea>
        <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCompile}
              disabled={isCompiling || isSubmitting}
              style={{
                outline: "none",
                minWidth: "100px",
                marginTop : '1rem',
                minHeight: "24px",
              }}
              startIcon={isCompiling ? null : <CodeIcon />}
            >
              {isCompiling ? <CircularProgress size="1.5rem" /> : "Compile"}
            </Button>
        </Grid>
      </Grid>
    </>
  ) 

  const resultPanel = (
    <>
      <Grid justify="space-around" container item style={{ padding: "1em" }}>
        <Grid container justify="flex-start" alignItems="center" item xs={3}>
          Your input
        </Grid>
        <Grid
          item
          xs={9}
          style={{
            padding: "0.5em",
            border: "1px solid rgb(238, 238, 238)",
            color: "#000",
            borderRadius: "3px",
            overflowX: "auto",
            backgroundColor: "rgb(250, 250, 250)",
          }}
        >
          <pre>{input}</pre>
        </Grid>
      </Grid>
      {output && (
        <Grid justify="space-around" container item style={{ padding: "1em" }}>
          <Grid item container xs={3} justify="flex-start" alignItems="center">
            Output
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              padding: "0.5em",
              border: "1px solid rgb(238, 238, 238)",
              color: "#000",
              borderRadius: "3px",
              overflowX: "auto",
              backgroundColor: "rgb(250, 250, 250)",
            }}
          >
            <pre>{output}</pre>
          </Grid>
        </Grid>
      )}
    </>
  );

  const console = (
    <Grid item className={classes.output}>
      <Grid
        container
        item
        xs={12}
        style={{ minHeight: "15%", color: "white", border: "1px solid grey" }}
      >
        <Button style={{backgroundColor : showTestcase ? 'grey' : null, borderRadius : 0}} onClick={()=>{setShowResult(false); setShowTestcase(true)}}>Testcase</Button>
        <Button className={classes.resultButton} onClick={()=>{setShowResult(true); setShowTestcase(false)}}>Result</Button>
        <Button
          endIcon={<ArrowDropDown />}
          style={{ marginLeft: "auto" }}
          onClick={() => setShowConsole(false)}
        ></Button>
      </Grid>
      <Grid container style={{ height: "80%", overflowY: "scroll" }}>
        {showResult && output && resultPanel }
        {showTestcase && testcasePanel}
      </Grid>
    </Grid>
  );

  return (
    <Grid
      className={classes.container}
    >
      <Grid className={classes.header}>
        <Button
          onClick={handleMenuClick}
          endIcon={<ArrowDropDown />}
          variant="outlined"
          color="primary"
          elevation={0}
          style={{
            height: "100%",
            borderRadius: 0,
          }}
        >
          {getSelectedLanguageName()}
        </Button>

        <Menu
          id="simple-menu"
          classes={{ paper: classes.menu }}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {languages.map(lang=> (
            <MenuItem 
              classes={{root:classes.menuItem}}
              onClick={() => {
                handleMenuClose();
                handleLanguageChange(lang.code);
              }}
            >
              {lang.name}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      
      <Grid className={classes.editor}>
        <AceEditor
          placeholder="Placeholder Text"
          width="100%"
          height="100%"
          mode={mode}
          theme="textmate"
          name="blah2"
          onLoad={onLoad}
          onChange={handleEditorValueChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={value}
          setOptions={{
            showLineNumbers: true,
            tabSize: 4,
            showPrintMargin : false,
          }}
        />
      </Grid>
      <Grid container className={classes.footer} alignItems="center">
        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setShowConsole(true)}
            style={{
              outline: "none",
              minWidth: "100px",
              marginRight: "5px",
              marginLeft: "10px",
              minHeigth: "24px",
            }}
          >
            Console
          </Button>
        </Grid>
        <Grid container item xs={9} justify="flex-end">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCompile}
              disabled={isCompiling || isSubmitting}
              style={{
                outline: "none",
                minWidth: "100px",
                marginRight: "5px",
                marginLeft: "auto",
                minHeigth: "24px",
              }}
              startIcon={isCompiling ? null : <CodeIcon />}
            >
              {isCompiling ? <CircularProgress size="1.5rem" /> : "Compile"}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmiting}
              className={classes.submit}
              disabled={isSubmitting || isCompiling}
              startIcon={isSubmitting ? null : <DoneAllIcon />}
            >
              {isSubmitting ? <CircularProgress size="1.5rem" /> : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {showConsole && console}
    </Grid>
  );
};

export default EditorScreen;
