// any code that gets written in here will be bundled
import React from 'react';
import { render } from 'react-dom'; // just import one method from react-dom

import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));
