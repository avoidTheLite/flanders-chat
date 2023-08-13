export function successFormatter (message, results, statusCode) {
    return {
        message,
        error: false,
        code: statusCode,
        results
    }
}

export function errorFormatter (message, statusCode) {
    return {
        message,
        code: statusCode,
        error: true
    }
}

