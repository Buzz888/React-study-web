import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom';
import App from './App';
import './iconfont/iconfont.css'
import {HashRouter as Router ,Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
                       <Route component={App}></Route>
               </Router>, 
document.getElementById('root'));


serviceWorker.unregister();
