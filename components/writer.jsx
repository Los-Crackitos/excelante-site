import React, { useState } from 'react';
import { Button } from 'antd';
import JsonEditor from './jsonEditor.jsx'

const Writer = () => {
  const [state, setState] = useState({
    jsonEditorValue: `
    {
      "sheets": [
        {
          "name":"Test",
          "orientation":"OrientationLandscape",
          "items": [
            {
              "mode":"table",
              "starting_cell_coordinates":"C05",
              "tables": [
                {
                  "orientation":"column",
                  "cells": [
                    {
                      "value":"avril",
                      "style":{}
                    },
                    {
                      "value":"Mai",
                      "style":{}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }`,
  });

  const SendJson = () => {
     fetch('http://localhost:7900/api/v1/write', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: state.jsonEditorValue
    })
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `jsonToExcel.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
  }

  return (
    <div>
      <JsonEditor
        value={state.jsonEditorValue}
        onValueChange={(e) => setState({ jsonEditorValue: e })}
      />
      <Button
        type="primary"
        value={state.jsonEditorValue}
        onClick={() => SendJson()}>
          Send Json
        </Button>
    </div>
  )
}

export default Writer;
