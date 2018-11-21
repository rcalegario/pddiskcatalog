import React, { Component } from 'react'

import InputField from '../common/InputField';

class DiskAdd extends Component {
  state = {
    title: '',
    artist: '',
    yaer: 0,
    musics: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit add thing', this.state);
  }

  hadleFieldChage = (e) => {
    let { id, value } = e;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Disk</h5>
          <InputField id="title" type="text" onChange={this.hadleFieldChage} name="Title" />
          <InputField id="artist" type="text" onChange={this.hadleFieldChage} name="Artist" />
          <InputField id="yaer" type="number" onChange={this.hadleFieldChage} name="Yaer" />
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>

      </div>
    )
  }
}

export default DiskAdd;
