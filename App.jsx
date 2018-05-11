import React from 'react';
import { Switch, Route,Link , BrowserRouter} from 'react-router-dom';

import HomeContainer from './src/home/home-container.js';
import EmployeeDetails from './src/employee-details/employee-details.js';
import {Header} from './src/shared/header.js';

const App=()=>{

    return(
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={HomeContainer}/>
              <Route path='/home' component={HomeContainer}/>
              <Route path='/employee/:empId' component={EmployeeDetails}/>
           </Switch>
         </div>
        </BrowserRouter>
    )
  }


export default App;
