import mysql from 'mysql2/promise'
import { configdb } from './config';

export const connect = async ()=>{
    return await mysql.createConnection(configdb);
}
