
const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay');
const BaseBall = require('./BaseBall')

ReactDom.render(<div><WordRelay /> <BaseBall /></div>, document.querySelector("#root"));