const path = require('path');
const fs = require('fs');
const winston = require('winston');

const filename = path.join(__dirname, 'logs.txt');
const config = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  },
};

const logger = winston.createLogger({
  level: 'debug',
  levels: config.levels,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename }),
  ],
});

function truncate() {
  try {
    fs.truncateSync('./log/logs.txt');
    logger.info('Logs file successfully cleared');
  } catch {
    logger.error('Logs file didn\'t exist. Logs file created');
  }
}

module.exports = { logger, truncate };
