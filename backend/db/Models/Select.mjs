import { Model, DataTypes } from 'sequelize';
import sequelize from '../connect.mjs';

function createFabricPlyAttributes(count) {
    return Array.from({ length: count }, (_, i) => ({
        [`fabricPly${i + 1}`]: { type: DataTypes.STRING, allowNull: true }
    })).reduce((acc, attr) => ({ ...acc, ...attr }), {})
};

const Select = sequelize.define('Select', {
    prodId: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: '0000',
        comment: 'Product id (will be foreign key for other tables)'
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ...createFabricPlyAttributes(24)
});

export default Select;
