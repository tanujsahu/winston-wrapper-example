import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, metadata } = format;

// Define custom log format for console with colorization
const consoleFormat = printf(({ level, message, timestamp, metadata }) => {
  // Function to remove ANSI color codes from the level property
  const cleanLevel = level.replace(/\u001b\[[0-9]{1,2}m/g, '');

  // Construct log entry
  const logEntry = {
    timestamp,
    level: cleanLevel,
    message,
    data: metadata
  };

  return JSON.stringify(logEntry, null, 2);
});

// Create and configure logger
const logger = createLogger({
  format: combine(
    timestamp(),
    metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        consoleFormat
      )
    }),
    new transports.File({ filename: 'app.log' })
  ],
  exitOnError: false // do not exit on handled exceptions
});

// Export logger
export default logger;
