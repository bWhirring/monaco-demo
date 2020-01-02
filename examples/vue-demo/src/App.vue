<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  mounted() {
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
    this.editor = monaco.editor.create(document.getElementById('container'), {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
      formatOnPaste: true,
      scrollbar: {
        verticalScrollbarSize: 5,
      },
    });
  },
};
</script>

<style>
#container {
  width: 100%;
  height: 300px;
}
</style>
