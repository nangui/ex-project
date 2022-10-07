const concat = require('concat');

(function build() {
  const files = [
    "./dist/ex-project/runtime.js",
    "./dist/ex-project/polyfills.js",
    "./dist/ex-project/main.js"
  ]

  concat(files, "./dist/ex-project/ex-project-mfe.js")
    .then(result => console.log('OK'));
})();
