import commonjs from 'rollup-plugin-commonjs' // Convert CommonJS modules to ES6
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from 'rollup-plugin-buble'

export default {
  input: 'src/wrapper.js', // Path relative to package.json
  output: {
    name: 'DataGrid',
    exports: 'named',
    globals: {
      axios: 'axios',
      'lodash/get': 'get'
    }
  },
  external: ['axios', 'lodash/get', 'core-js/**'],
  plugins: [
    babel({
      runtimeHelpers: true
    }),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    buble()
  ]
}
