import { Model, DataTypes } from 'sequelize';
import sequelize from '../connect.mjs';

export default class Report extends Model { }

Report.init({
    dateCurr: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    shift: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'A'
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    plyBraker: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,

    },
    fabricName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    length: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,

    },
    width: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,

    },
    angle: {
        type: DataTypes.FLOAT,
        allowNull: false,

    },
    actCuts: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,

    },
    remainCuts: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,

    },
    totalSetCuts: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,

    },
    actTyres: {
        type: DataTypes.FLOAT,
        allowNull: false,

    },
    remainTyres: {
        type: DataTypes.FLOAT,
        allowNull: false,

    },
    totalSetTyres: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,

    }
}, { sequelize });
