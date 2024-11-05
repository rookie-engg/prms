import { Model, DataTypes } from 'sequelize';
import sequelize from '../../connect.mjs';

export default class SetTyre extends Model { };

SetTyre.init({
    ...Array(24).fill(null).map((_, index) => ({
        [`setTyre${index + 1}`]: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
}, { sequelize });
