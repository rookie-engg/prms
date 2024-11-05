import { Sequelize } from 'sequelize';
import 'dotenv/config';

const {
    NODE_ENV,
    DB_NAME,
    DB_NAME_DEV,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_DIALECT,
    DB_USER
} = process.env;

const database = NODE_ENV === 'production' ? DB_NAME : DB_NAME_DEV;
export const sequelize = new Sequelize(database, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: NODE_ENV !== 'production' ? console.log : false,
});

export default sequelize;