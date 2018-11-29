import React, { Component } from 'react'
import { connect } from 'react-redux';

import { findDisk, deleteDisk } from '../../store/actions/diskActions';

class Disk extends Component {
  
  componentWillMount = () => {
    const { id } = this.props.match.params;
    this.props.findDisk(Number(id));
  }

  handleDelete = () => {
    this.props.deleteDisk(Number(this.props.disk.id));
  }
  
  render() {
    const { disk } = this.props;

    if (disk) {
      return (
        <div className="container section thing">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{disk.title}</span>
              <p>{disk.artist}</p>
              <p>musics</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <p className="grey-text">{disk.year}</p>
            </div>
          </div>
          <div className="right">
            <button className="btn green lighten-1 z-depth-0">Edit</button>
            <button className="btn red lighten-1 z-depth-0" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <p>Loading disk ...</p>
        </div>
      )
    }
    
  }
}

const mapStateToProps = (state) => {
  return { disk: state.disk };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    findDisk: (id) => dispatch(findDisk(id)),
    deleteDisk: (id) => dispatch(deleteDisk(id, ownProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Disk);
