const initState = {
  disks: []
}

const diskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DISK':
      return {
        ...state,
        disks: [...state.disks, action.disk]
      };
    case 'FIND_ALL_DISKS':
      return {
        ...state,
        disks: action.disks
      };
    case 'FIND_DISK':
      return {
        ...state,
        disk: action.disk
      };
    default:
      // TODO: tratamento de exception
      return state;
  }
};

export default diskReducer;