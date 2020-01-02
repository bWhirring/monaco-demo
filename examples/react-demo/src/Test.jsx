import React from 'react'
import MonacoEditor from 'react-monaco-editor'

const defaultOptions = {
  selectOnLineNumbers: true,
  autoIndent: true,
  // minimap: { enabled: false },
  scrollBeyondLastLine: false,
}
function Test(props) {
  return (
    <>
      <MonacoEditor
        width="100%"
        height={300}
        language='typescript'
        theme='vs-dark'
        value=""
        options={{ ...props, ...defaultOptions }}
      />
    </>
  )
}

export default Test
