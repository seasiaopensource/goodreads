import React, { lazy, Suspense } from 'react';import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

const Books = lazy(() => import('./containers/Books'));


const Routes = () => (
  <Router>
        <Suspense fallback={<div>Loading...</div>}>
    <div>
      <Header />
      <Route exact path="/" component={Books} />
    </div>
    </Suspense>
  </Router>
);

export default (Routes);
