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
      console.log('FIND_ALL_DISKS res', res.data.data);
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
      console.log('DELETE_DISK res');
      dispatch({ type: 'DELETE_DISK', disk: null });
      ownProps.history.push('/disks');
    }).catch((err) => {
      console.log('err', err);
      dispatch({ type: 'ERROR' });
    })
  }
};

