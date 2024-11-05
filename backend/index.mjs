import 'dotenv/config';
import winston from 'winston';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import app from './app.mjs';
import sequelize from './db/connect.mjs';
import './db/associations.mjs';

// Initialize Models
import Select from './db/Models/Select.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY/MM/DD ,HH:MM:SS'
        }),

        winston.format.printf(({ level, timestamp, message }) => {
            // Escape the message by wrapping it in double quotes
            const escapedMessage = `"${message.replace(/"/g, '""')}"`; // Escape double quotes
            return `${level.padEnd(5)} ,${timestamp.toString().padEnd(21)},${escapedMessage}`;
        })
    ),
    transports: [
        new winston.transports.File({
            level: 'error',
            filename: path.join(__dirname, './logs/errro.log.csv'),
        }),

        new winston.transports.File({
            filename: path.join(__dirname, './logs/combined.log.csv'),
        }),
    ]
});

if (process.env.NODE_ENV != 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
            winston.format.colorize({ all: true }),
            winston.format.printf(({ timestamp, level, message }) => {
                return `${level.padEnd(15)}: ${timestamp.toString().padEnd(15)} - ${message}`;
            }),
        )
    }));
}

try {
    await sequelize.authenticate();
} catch (error) {
    logger.error(error.toString());
    throw new Error(error);
}

try {
    await sequelize.sync({
        force: process.env.NODE_ENV !== 'production'
    });
} catch (error) {
    logger.error(error.toString());
    throw new Error(error);
}

const port = process.env?.SERVER_PORT || 8080;
app.listen(port, () => {
    logger.info(`server on http://localhost:${port}`);
});
