var copy = require('@ionic/app-scripts/config/copy.config.js');

copy.copyStyleSheets = {
  src: ['{{ROOT}}/node_modules/devextreme/dist/css/**/*'],
  dest: '{{WWW}}/assets/css'
};

module.exports = copy;