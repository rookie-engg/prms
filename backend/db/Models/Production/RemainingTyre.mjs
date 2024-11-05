import { Model, DataTypes } from 'sequelize';
import sequelize from '../../connect.mjs';

export default class RemainingTyre extends Model { };

RemainingTyre.init({
    ...Array(24).fill(null).map((_, index) => ({
        [`remainingTyre${index + 1}`]: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
}, { sequelize });
