import { DataTypes } from "sequelize";
import sequelize from "../connect.mjs";

const Width = sequelize.define('Width', {
    ...Array(24).fill(null).map((_, index) => ({
        [`width${index + 1}`]: {
            type: DataTypes.FLOAT.UNSIGNED,
            defaultValue: 0.0,
            allowNull: false
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
});

export default Width;