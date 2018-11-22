import React, { Component } from 'react'
import { connect } from 'react-redux'

import DiskSummary from './DiskSummary';

class DiskList extends Component {
  render() {
    const { disks } = this.props;
    console.log('disks', disks);
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

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    disks: state.disks
  }
}

export default connect(mapStateToProps)(DiskList);
