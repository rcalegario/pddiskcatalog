const db = require('../../config/database');

const DISK_TABLE = 'disks';

const keyYearCheck = ({ key, value }, first, last) => {
  return `${first ? '' : ' AND '}${key} ${key === 'year' ? '= ' : 'LIKE \'%'}${value}${key === 'year' ? '' : '%\''}`;
};

const valueYaerCheck = ({ key, value }) => {
  return key === 'year' ? Number(value) : value;
}

const whereBuild = (filters) => {
  const params = [];
  let wherePart = ' WHERE ';
  const [first] = filters;
  wherePart += keyYearCheck(first, true);
  params.push(valueYaerCheck(first));
  let last;
  if (filters.length > 1) {
    last = filters.pop();
  }
  filters.splice(1,1).forEach(filter => {
    wherePart += keyYearCheck(filter);
    params.push(valueYaerCheck(filter));
  });
  if (last) {
    wherePart += keyYearCheck(last, false, true);
    params.push(valueYaerCheck(last));
  }
  return { wherePart, params };
}

exports.find = async (filters) => {
  try {
    let query = `SELECT * FROM ${DISK_TABLE}`;
    if (filters) {
      const { wherePart , params } = whereBuild(filters);
      query += wherePart;
    }
    query += ';';
    const disks = await db.query(query);
    return disks;
  } catch (error) {
    throw new Error(error);
  }
};

exports.findById = async (id) => {
  try {
    const result =  await db.query(`SELECT * FROM ${DISK_TABLE} WHERE id = ?`, [id]);
    return result[0];
  } catch (error) {
    throw new Error(error);
  }
};

exports.create = async (data) => {
  try {
    const result = await db.query(`INSERT INTO ${DISK_TABLE} (title, artist, year, createAt, updateAt) VALUES(?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`, [data.title, data.artist, data.year]);
    const disk = this.findById(result.insertId);
    return disk;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateById = async (id, data) => {
  try {
    await db.query(`UPDATE ${DISK_TABLE} SET title = ?, artist = ?, year = ?, updateAt = CURRENT_TIMESTAMP WHERE id = ?`, [data.title, data.artist, data.year, id])
    const disk = this.findById(id);
    return disk;
  } catch (error) {
    throw new Error(error);
  }
};

exports.removeById = async (id) => {
  try {
    const disk = await this.findById(id);
    if (disk) {
      await db.query(`DELETE FROM ${DISK_TABLE} WHERE id = ?`, [id]);
    }
    return disk;
  } catch (error) {
    throw new Error(error);
  }
};
