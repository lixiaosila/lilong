import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

	  var i = 1;
      ReactDOM.render(
      	<div>
      	  <h1>{i == 1 ? 'True!' : 'False'}</h1>
        </div>
      	,
      	document.getElementById('example')
      );
registerServiceWorker();
