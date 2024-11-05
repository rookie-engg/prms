import { DataTypes } from "sequelize";
import sequelize from "../connect.mjs";

const Angle = sequelize.define('Angle', {
    ...Array(24).fill(null).map((_, index) => ({
        [`angle${index + 1}`]: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }))
});

export default Angle;