import React from 'react';
import ReactDom from 'react-dom';
import { IncomingMessage } from 'http';
import Component from './componente.jsx';

//ReactDom.render(<h1>Do you want a balloon?<img src="http://pixelartmaker.com/art/5b779b2bfe422c2.png" height="40" width="40"/></h1> , document.getElementById('app'));

ReactDOM.render(<Component />, document.getElementById('app'));