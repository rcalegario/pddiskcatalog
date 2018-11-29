const { Router } = require('express');

const diskController = require('./disk.controller');

const diskRouter = Router();

/**
 * @swagger
 * /disks:
 *   get:
 *     summary: Retrieve all disks
 *     description: Retrieve all disks on database
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Disk
 *     parameters:
 *       - in: query
 *         name: filters
 *         schema:
 *           type: string
 *         description: Filters for search
 *     responses:
 *       200:
 *         description: List of all disk
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
diskRouter.get('/', diskController.search);

/**
 * @swagger
 * /disks/{id}:
 *   get:
 *     tags:
 *       - Disk
 *     summary: Retrieve a disk
 *     description: Retrieve a disk by passing his id
 *     parameters:
 *       - name: id
 *         description: Disk id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Disk
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
diskRouter.get('/:id', diskController.getDiskById);

/**
 * @swagger
 * /disks:
 *   post:
 *     summary: Insert new disk
 *     description: Insert new disk on database
 *     tags:
 *       - Disk
 *     parameters:
 *       - name: disk
 *         description: Disk object
 *         in:  body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Disk'
 *     responses:
 *       201:
 *         description: Disk created
 *       400:
 *         description: Bad Request
 */
diskRouter.post('/', diskController.createDisk);

/**
 * @swagger
 * /disks/{id}:
 *   put:
 *     summary: Update a disk
 *     description: Update a disk by passing his id
 *     tags:
 *       - Disk
 *     parameters:
 *       - name: id
 *         description: Disk id
 *         in: path
 *         required: true
 *         type: string
 *       - name: disk
 *         description: Disk object
 *         in:  body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Disk'
 *     responses:
 *       200:
 *         description: Disk updated
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
diskRouter.put('/:id', diskController.updateDisk);

/**
 * @swagger
 * /disks/{id}:
 *   delete:
 *     tags:
 *       - Disk
 *     summary: Delete a disk
 *     description: Delete a disk by passing his id
 *     parameters:
 *       - name: id
 *         description: Disk id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Disk deleted
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
diskRouter.delete('/:id', diskController.deleteDisk);

/**
 * @swagger
 *
 * definitions:
 *   Disk:
 *     type: object
 *     required:
 *       - title
 *       - artist
 *       - year
 *     properties:
 *       title:
 *         type: string
 *       artist:
 *         type: string
 *       year:
 *         type: number
 */

module.exports = diskRouter;