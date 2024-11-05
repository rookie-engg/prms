import { Model, DataTypes } from 'sequelize';
import sequelize from '../../connect.mjs';

export default class RemainingCut extends Model { };

RemainingCut.init({
    ...Array(24).fill(null).map((_, index) => ({
        [`remainingCut${index + 1}`]: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
}, { sequelize });
