import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { getOutput } from "../actions/output";
import { java, cpp, python3 } from "../codeDefault/codeDefault";
import { Button,Box } from "@material-ui/core";
import { Code as CodeIcon, DoneAll as DoneAllIcon, ArrowDropDown } from "@material-ui/icons";

import { makeStyles,CircularProgress,Menu,MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: theme.palette.primary,
    color : "#FFF",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
  menu : {
    backgroundColor : "#000",
  },
  menuItem : {
    color : "white",
    opacity : 0.7,
    '&:hover':{
      opacity : 1
    }
  }
}));

const EditorScreen = () => {
  const classes = useStyles();

  const [javaDefault, setJavaDefault] = useState(java);

  const [python3Default, setPython3Default] = useState(python3);

  const [cppDefault, setCppDefault] = useState(cpp);

  const [value, setValue] = useState("");
  const [output, setOutput] = useState(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [language, setLanguage] = useState("java");
  const [anchorEl, setAnchorEl] = useState(null);

  const getSelectedLanguageName = () => {
    switch(language){
      case "cpp":
        return "C++"
      case "python3":
        return "Python 3"
      default :
       return "Java"
    }
  }

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
      setValue(javaDefault);
    } else if (lang === "cpp") {
      setValue(cppDefault);
    } else if (lang === "python3") {
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

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleMenuClose = () =>{ 
    setAnchorEl(null);
  }

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

      <Box>
      <Button onClick={handleMenuClick} endIcon={<ArrowDropDown />} variant="contained" color="primary">
        {getSelectedLanguageName()}
      </Button>
      
      <Menu
        id="simple-menu"
        classes={{paper : classes.menu}}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(handleMenuClose)}
      >
        <MenuItem classes={{root : classes.menuItem}}  onClick={() => {handleMenuClose()
          handleLanguageChange("java")
        }}>Java</MenuItem>
        <MenuItem classes={{root : classes.menuItem}} onClick={() => {handleMenuClose()
          handleLanguageChange("cpp")
        }}>C++</MenuItem>
        <MenuItem classes={{root : classes.menuItem}} onClick={() => {handleMenuClose()
          handleLanguageChange("python3")
        }}>Python 3</MenuItem>
      </Menu>
      </Box>

      <Editor
        height="60vh"
        options={
          {
            minimap : {
              enabled : false
            },
            suggest : {
              showVariables : true
            }
          }
        }
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
      {output!==null && <div>
        <label style={{ display: "block" }}>Output</label>
        <textarea
          rows={4}
          id="output"
          value={output}
          readOnly
          style={{ width: "100%", height: "100px" }}
        />
      </div>}
    </div>
  );
};

export default EditorScreen;
