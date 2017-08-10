// any code that gets written in here will be bundled
import React from 'react';
import { render } from 'react-dom'; // just import one method from react-dom
import './css/style.css'; // importing css from css file

import StorePicker from './components/StorePicker';
import App from './components/App';

render(<App/>, document.querySelector('#main'));
