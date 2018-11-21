import React, { Component } from 'react'

class Disk extends Component {
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
            <button className="btn red lighten-1 z-depth-0">Delete</button>
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

export default Disk;
