import { DataTypes } from "sequelize";
import sequelize from "../connect.mjs";

const Length = sequelize.define('Length', {
    ...Array(24).fill(null).map((_, index) => ({
        [`len${index + 1}`]: {
            type: DataTypes.FLOAT.UNSIGNED,
            defaultValue: 0.0,
            allowNull: false
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
});

export default Length;