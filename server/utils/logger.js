const winston = require('winston');

winston.emitErrs = true;

const logLevel = 'info';
const environment = 'local';
const nodeEnv = 'local';

const logger = new winston.Logger({
  rewriters: [
    (level, msg, meta) => {
      meta.environment = environment + ' ' + nodeEnv;
      return meta;
    }
  ],
  transports: [
    new winston.transports.Console({
      level: logLevel,
      handleExceptions: true,
      label: ' ----- Soundcloud api ----- ',
      json: true,
      timestamp: true,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
module.exports.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};
