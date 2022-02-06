import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Controller from "./pages/Controller";

const App: React.FC<{ className?: string; }> = (props) => {
  return (
    <Fragment>
      <main>
        <Routes>
          <Route path='/controller' element={<Controller />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
