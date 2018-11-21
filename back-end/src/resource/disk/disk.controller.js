const diskService = require('./disk.service');

exports.getAllDisk = async (req, res, next) => {
  try {
    const disks = await diskService.getAll()
    res.json({ msg: 'all disk on db', data: disks});
  } catch (e) {
    next(e);
  }
};

exports.getDiskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const disk = await diskService.getById(id);
    res.json({ msg: `disk with id ${id}`, data: disk });
  } catch (e) {
    next(e);
  }
};

exports.createDisk = async (req, res, next) => {
  try {
    const data = req.body;
    const disk = await diskService.create(data);
    res.json({ msg: `created disk`, data: disk });
  } catch (e) {
    next(e);
  }
};

exports.updateDisk = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const disk = await diskService.update(id, data);
    res.json({ msg: `updated disk with id ${id}`, data: disk });
  } catch (e) {
    next(e);
  }
};

exports.deleteDisk = async (req, res, next) => {
  try {
    const { id } = req.params;
    const disk = await diskService.delete(id);
    res.json({ msg: `delete disk with id ${id}`, data: disk });
  } catch (e) {
    next(e);
  }
};
