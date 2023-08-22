import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rover from './Rover';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Rover
	dimensions={[8, 8]}
  start={[0, 0]}
/>, document.getElementById('root'));
registerServiceWorker();