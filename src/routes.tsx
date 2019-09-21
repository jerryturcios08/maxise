import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './views/dashboard';
import Schedule from './views/schedule';
import Social from './views/social';
import Settings from './views/settings';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/settings" component={Settings} />
        <Route path="/social" component={Social} />
      </Switch>
    </BrowserRouter>
  );
}
