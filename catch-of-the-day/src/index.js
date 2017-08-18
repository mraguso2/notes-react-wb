// any code that gets written in here will be bundled
import React from 'react';
import { render } from 'react-dom'; // just import one method from react-dom
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'; // importing css from css file
import App from './components/App';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

/**
 * when using props (pattern, component) in jsx that are equal to
 * non-string values you need to wrap them in curlys {}
 */

const Root = () => {
  // BrowserRouter is at the Parent top level, so access to router throughout
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} /> 
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
