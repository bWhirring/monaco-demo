import React, { useEffect } from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as monaco from 'monaco-editor'

const defaultOptions = {
  selectOnLineNumbers: true,
  autoIndent: true,
  // minimap: { enabled: false },
  scrollBeyondLastLine: false,
}
function Test1(props) {
  console.log(monaco)
  useEffect(() => {
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES6,
      allowNonTsExtensions: true
    })
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      [
        `
        declare module engine {
          export const VERSION = "1.0";
          }
        `
      ].join("\n"),
      ""
    )
  }, [])
  return (
    <>
      <MonacoEditor
        width="100%"
        height={300}
        language='javascript'
        theme='vs-dark'
        value=""
        options={{ ...props, ...defaultOptions }}
      />
    </>
  )
}

export default Test1
