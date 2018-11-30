import React, { Component } from 'react'
import { connect } from 'react-redux'

import DiskSummary from './DiskSummary';
import DiskSearch from './DiskSearch';
import { findAll } from '../../store/actions/diskActions';

class DiskList extends Component {
  
  componentWillMount() {
    this.props.findAll();
  }
  
  render() {
    const { disks } = this.props;
    console.log('DiskList render', disks);
    if (disks) {
      return (
        <div className="disk-list container">
          <DiskSearch />
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
  return {
    disks: state.disks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAll: () => {
      return dispatch(findAll())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiskList);
