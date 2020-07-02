import React from 'react';
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-textmate";

const JsonEditor = ({value, onValueChange}) => {
  return (
    <AceEditor
      placeholder="Insert your json here"
      mode="json"
      theme="textmate"
      name="blah2"
      fontSize={12}
      showPrintMargin={true}
      showGutter={true}
      onChange={onValueChange}
      highlightActiveLine={true}
      value={value}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}/>
  )
}

export default JsonEditor
