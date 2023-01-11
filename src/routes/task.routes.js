import {Router} from "express";
const router = Router()

import { getTask, getTakConund, getTak, createTak, deleteTak, updateTask } from '../controllers/task.controllers.js'

/**
 * @swagger
 * tags:
 *  name:   Tareas
 *  description: Punto final de la tarea
 */

/**
 * @swagger
 * /task:
 *  get:
 *      summary: Optiene todas las tareas
 *      tags:   [Tareas]
 */
router.get('/task', getTask)

/**
 * @swagger
 * /task/count:
 *  get:
 *      summary: Optiene el contador total de todas las tareas
 *      tags:   [Tareas]
 */
router.get('/task/count', getTakConund)

/**
 * @swagger
 * /task/:id:
 *  get:
 *      summary: Optiene todas las tareas por id
 *      tags:   [Tareas]
 */
router.get('/task/:id', getTak)

/**
 * @swagger
 * /task:
 *  post:
 *      summary: Crea una nueva tarea
 *      tags:   [Tareas]
 */
router.post('/task', createTak)

/**
 * @swagger
 * /task:
 *  delete:
 *      summary: Elimina una tarea por medio de us id
 *      tags:   [Tareas]
 */
router.delete('/task/:id', deleteTak)

/**
 * @swagger
 * /task:
 *  put:
 *      summary: actualiza la tarea
 *      tags:   [Tareas]
 */
router.put('/task/:id', updateTask)

export default router;