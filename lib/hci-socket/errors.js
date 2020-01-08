class UnknownPeripheralError extends Error {
    constructor(uuid) {
        super('Unknown peripheral ' + uuid + '.');

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    UnknownPeripheralError
};