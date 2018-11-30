import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/disks';

export const addDisk = (disk, ownProps) => {
  console.log('ownProps', ownProps);
  return (dispatch) => {
    axios.post(BASE_URL, disk)
    .then((res) => {
      dispatch({ type: 'ADD_DISK', disk: res.data.data });
      ownProps.history.push('/disks');
    }).catch((err) => {
      console.log('err', err);
      dispatch({ type: 'ERROR' });
    })
  }
};

export const findAll = () => {
  return (dispatch) => {
    axios.get(BASE_URL)
    .then((res) => {
      dispatch({ type: 'FIND_ALL_DISKS', disks: res.data.data });
    }).catch((err) => {
      console.log('err', err);
      dispatch({ type: 'ERROR' });
    })
  }
};

export const findDisk = (id) => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/${id}`)
    .then((res) => {
      dispatch({ type: 'FIND_DISK', disk: res.data.data });
    }).catch((err) => {
      console.log('err', err);
      dispatch({ type: 'ERROR' });
    })
  }
};

export const deleteDisk = (id, ownProps) => {
  console.log('ownProps', ownProps);
  return (dispatch) => {
    axios.delete(`${BASE_URL}/${id}`)
    .then(() => {
      dispatch({ type: 'DELETE_DISK', disk: null });
      ownProps.history.push('/disks');
    }).catch((err) => {
      console.log('err', err);
      dispatch({ type: 'ERROR' });
    })
  }
};

const queryParamsBuilder = (filters) => {
  let queryParams = '?'
  Object.keys(filters).forEach(key => {
    if (filters[key]) {
      queryParams += `filters=${key}|${filters[key]}&`
    }
  });
  return queryParams !== '?' ? queryParams : '';
}

export const search = (filters) => {
  return (dispatch) => {
    const url = BASE_URL+queryParamsBuilder(filters);
    console.log('url', url);
    axios.get(url)
    .then((res) => {
      dispatch({ type: 'FIND_ALL_DISKS', disks: res.data.data });
    }).catch((err) => {
      console.log('err', err);
      dispatch({ type: 'ERROR' });
    })
  }
};
