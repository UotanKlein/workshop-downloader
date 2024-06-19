class BaseError extends Error {
    constructor(message, text, name, statusCode) {
        super(message);
        this.text = text;
        this.name = name;
        this.statusCode = statusCode;
    }
}

class InvalidUrlError extends BaseError {
    constructor(message) {
        super(message, 'Некорректная ссылка', 'InvalidUrlError', 400);
    }
}

class AddonNotFoundError extends BaseError {
    constructor(message) {
        super(message, 'Аддон не найден', 'AddonNotFoundError', 404);
    }
}

class GameNotSupportedError extends BaseError {
    constructor(message) {
        super(message, 'Игра не поддерживается', 'GameNotSupportedError', 403);
    }
}

class AddonAlreadyExistsError extends BaseError {
    constructor(message) {
        super(message, 'Аддон уже существует', 'AddonAlreadyExistsError', 409);
    }
}

export { InvalidUrlError, AddonNotFoundError, GameNotSupportedError, AddonAlreadyExistsError };
