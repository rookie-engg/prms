import { faker } from '@faker-js/faker';
import sequelize from './connect.mjs';
import './associations.mjs';
import Select from './Models/Select.mjs';
import Angle from './Models/Angle.mjs';
import Width from './Models/Width.mjs';
import Length from './Models/Length.mjs';

console.time('time-taken');

const numberOfRecordsToGenrate = process.argv[2] || 10;

const prodIds = faker.helpers.uniqueArray(
    () => faker.string.alphanumeric({length: 4}).toUpperCase(),
    numberOfRecordsToGenrate
);

const selectModelData = prodIds.map((prodId) => ({
    prodId: prodId,
    size: faker.string.alphanumeric({
        length: 30
    }).toUpperCase(),
    ...Array(24).fill(null).map((_, idx) => ({
        [`fabricPly${idx + 1}`]: faker.number.int({min: 1, max:100})
    })).reduce((acc, curr) => ({ ...acc, ...curr })),
    Angle: {
        ...Array(24).fill(null).map((_, idx) => ({
            [`angle${idx + 1}`]: faker.number.int({min: 1, max:180})
        })).reduce((acc, curr) => ({ ...acc, ...curr })),
    },
    Width: {
        ...Array(24).fill(null).map((_, idx) => ({
            [`width${idx + 1}`]: faker.number.int({min: 1, max:100})
        })).reduce((acc, curr) => ({ ...acc, ...curr })),
    },
    Length: {
        ...Array(24).fill(null).map((_, idx) => ({
            [`len${idx + 1}`]: faker.number.int({min: 1, max:100})
        })).reduce((acc, curr) => ({ ...acc, ...curr })),
    }
}));

await sequelize.authenticate();
await sequelize.sync({force: true});

await Promise.all([
    Select.bulkCreate(selectModelData, {
        include: [Angle, Width, Length]
    }),
])

console.timeEnd('time-taken');
