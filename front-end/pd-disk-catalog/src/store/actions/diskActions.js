export const addDisk = (disk) => {
  return { type: 'ADD_DISK', disk };
};

export const findDisk = (id) => {
  return { type: 'FIND_DISK', id };
};

