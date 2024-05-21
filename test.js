import logger from './src/index.js';

logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

// Log with metadata
logger.info('This is an info message with metadata', { userId: 123, operation: 'update' });
logger.warn('This is a warning message with metadata', { userId: 456, operation: 'delete' });
logger.error('This is an error message with metadata', { userId: 789, operation: 'create' });