import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import DiskList from './components/disk/DiskList';
import DiskAdd from './components/disk/DiskAdd';
import Disk from './components/disk/Disk';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={'/'} component={DiskList}/>
            <Route exact path={'/disks'} component={DiskList}/>
            <Route exact path={'/disks/add'} component={DiskAdd}/>
            <Route path={'/disks/:id/:edit'} component={DiskAdd}/>
            <Route path={'/disks/:id'} component={Disk}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
