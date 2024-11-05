import { Model, DataTypes } from 'sequelize';
import sequelize from '../../connect.mjs';

export default class SetCut extends Model { };

SetCut.init({
    ...Array(24).fill(null).map((_, index) => ({
        [`setCut${index + 1}`]: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
}, { sequelize });
