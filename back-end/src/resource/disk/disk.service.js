const repository = require("./disk.repository");
const { DISK_NOT_FOUND } = require("./disk.constants");
const { handlerNotFound, handlerThrow } = require("../../common/exception/service.error");
const AppError = require('../../common/exception/app.error');

exports.getAll = async () => {
  try {
    return await repository.findAll();
  } catch (e) {
    throw new AppError(...handlerThrow(e));
  }
};

exports.getById = async (id) => {
  try {
    const disk = await repository.findById(id);
    if (!disk) {
      throw new AppError(...handlerNotFound(DISK_NOT_FOUND));
    }
    return disk;
  } catch (e) {
    throw new AppError(...handlerThrow(e));
  }
};

exports.create = async (data) => {
  try {
    return await repository.create(data);
  } catch (e) {
    throw new AppError(...handlerThrow(e));
  }
};

exports.update = async (id, data) => {
  try {
    const disk = await repository.updateById(id, data);
    if (!disk) {
      throw new AppError(...handlerNotFound(DISK_NOT_FOUND));
    }
    return disk;
  } catch (e) {
    throw new AppError(...handlerThrow(e));
  }
};

exports.delete = async (id) => {
  try {
    const disk = await repository.removeById(id);
    if (!disk) {
      throw new AppError(...handlerNotFound(DISK_NOT_FOUND));
    }
    return disk;
  } catch (e) {
    throw new AppError(...handlerThrow(e));
  }
};
