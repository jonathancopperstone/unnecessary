import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import css from './app.module.css';
import './design-system.css';
import './globals.css';

import { Dashboard } from './modules/dashboard/views/dashboard';
import { Thought } from './modules/thoughts/views/thought';

export const App: React.FC = () => {
  return (
    <div className={css.app}>
      <Router>      
        <Switch>
        
          <Route 
            exact path={'/'}
            render={props => <Dashboard {...props} />} />
          
          <Route 
            exact path={'/thoughts/:id'}
            render={props => <Thought {...props} />} />
          
          <Redirect to={'/'} />
        
        </Switch>
      </Router>
    </div>
  );
};
