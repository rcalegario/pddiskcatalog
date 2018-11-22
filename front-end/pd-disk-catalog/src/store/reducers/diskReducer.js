const initState = {
  disks: [
    { id: 1, title: 'disk 1', artist: 'artist 1', year: 1993, musics: [] },
    { id: 2, title: 'disk 2', artist: 'artist 2', year: 1994, musics: [] },
    { id: 3, title: 'disk 3', artist: 'artist 3', year: 1995, musics: [] },
  ]
}

const diskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DISK':
      action.disk.id = Math.floor(Math.random() * 1000);
      return {
        ...state,
        disks: [...state.disks, action.disk]
      };
    case 'FIND_DISK':
      return {
        ...state,
        disk: state.disks.find(disk => disk.id === action.id)
      };
    default:
      // TODO: tratamento de exception
      return state;
  }
};

export default diskReducer;