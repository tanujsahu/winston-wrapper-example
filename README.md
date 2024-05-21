# winston-wrapper-example
A wrapper for the Winston logging library using ES6 syntax.


     npm install @tanuj_sahu_ts/winston-wrapper

## Example 

    import logger from '@tanuj_sahu_ts/winston-wrapper';


    logger.info('This is an info message');
    logger.warn('This is a warning message');
    logger.error('This is an error message');

    // Log with metadata
    logger.info('This is an info message with metadata', { userId: 123, operation: 'update' });
    logger.warn('This is a warning message with metadata', { userId: 456, operation: 'delete' });
    logger.error('This is an error message with metadata', { userId: 789, operation: 'create' });

 ## Output 
    {
    "timestamp": "2024-05-21T10:00:00.000Z",
    "level": "info",
    "message": "This is an info message"
    }

    {
    "timestamp": "2024-05-21T10:00:00.000Z",
    "level": "warn",
    "message": "This is a warning message"
    }

    {
    "timestamp": "2024-05-21T10:00:00.000Z",
    "level": "error",
    "message": "This is an error message"
    }

    {
    "timestamp": "2024-05-21T10:00:00.000Z",
    "level": "info",
    "message": "This is an info message with metadata",
    "data": { "userId": 123, "operation": "create" }
    }

    {
    "timestamp": "2024-05-21T10:00:00.000Z",
    "level": "warn",
    "message": "This is a warning message with metadata",
     "data": { "userId": 456, "operation": "create" }
    }

    {
    "timestamp": "2024-05-21T10:00:00.000Z",
    "level": "error",
    "message": "This is an error message with metadata",
    "data": { "userId": 789, "operation": "create" }
    }

