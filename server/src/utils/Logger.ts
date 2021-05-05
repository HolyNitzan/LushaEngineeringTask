import winston from 'winston';

export default  winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.cli(),
    winston.format.timestamp(),
    winston.format.uncolorize(),
    winston.format.align(),
    winston.format.printf(info => `[${info.timestamp}] [${info.level}]: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
  ]
});
