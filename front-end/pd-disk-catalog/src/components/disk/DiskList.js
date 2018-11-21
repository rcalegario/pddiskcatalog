import React, { Component } from 'react'

import DiskSummary from './DiskSummary';

class DiskList extends Component {
  render() {
    const { disks } = this.props;
    if (disks) {
      return (
        <div className="disk-list container">
          <div className="row">
            <div className="col s10 offset-s1">
              <div className="disk-list section">
                {disks && disks.map((disk) => {
                  return <DiskSummary disk={disk} key={disk.id}/>
                })}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <p>Loading disks list ...</p>
        </div>
      )
    }
    
  }
}

export default DiskList;
