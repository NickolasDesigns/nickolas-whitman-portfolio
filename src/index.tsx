import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

const Resume = lazy(() => import('./components/resume/index'));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Resume />
  </Suspense>,
  document.getElementById('root')
);
