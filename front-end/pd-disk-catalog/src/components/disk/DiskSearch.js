import React, { Component } from 'react'
import { connect } from 'react-redux'

import InputField from '../common/InputField';
import { search } from '../../store/actions/diskActions';

class DiskSearch extends Component {
  state = {
    title: '',
    artist: '',
    year: 0,
  }

  handleSearch = (e) => {
    this.props.search(this.state);
  }
  
  handleFieldChage = (e) => {
    let { id, value } = e;
    this.setState({ [id]: value });
  }
  
  render() {
    return (
      <div className="row disk-search">
        <div className="col s4">
          <InputField id="title" type="text" onChange={this.handleFieldChage} name="Title" />
        </div>
        <div className="col s4">
          <InputField id="artist" type="text" onChange={this.handleFieldChage} name="Artist" />
        </div>
        <div className="col s3">
          <InputField id="year" type="number" onChange={this.handleFieldChage} name="Yaer" />
        </div>
        <div className="col s1">
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSearch}>Search</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (filters) => {
      return dispatch(search(filters))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiskSearch);
