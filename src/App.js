import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {

  
  return (
    <Router>
      <Route path='/'>
        <div>
            <Button type='primary' size="small">Loading</Button>
        </div>
      </Route>
    </Router>
  );
}

export default App;
