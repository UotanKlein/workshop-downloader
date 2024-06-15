class InvalidUrlError extends Error {
    constructor(message) {
        super(message);
        this.text = 'Некорректная ссылка';
        this.name = 'InvalidUrlError';
        this.statusCode = 400;
    }
}

class AddonNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.text = 'Аддон не найден';
        this.name = 'AddonNotFoundError';
        this.statusCode = 404;
    }
}

class GameNotSupportedError extends Error {
    constructor(message) {
        super(message);
        this.text = 'Игра не поддерживается';
        this.name = 'GameNotSupportedError';
        this.statusCode = 403;
    }
}

class AddonAlreadyExistsError extends Error {
    constructor(message) {
        super(message);
        this.text = 'Аддон уже существует';
        this.name = 'AddonAlreadyExistsError';
        this.statusCode = 409;
    }
}

export default {
    InvalidUrlError,
    AddonNotFoundError,
    GameNotSupportedError,
    AddonAlreadyExistsError,
};
