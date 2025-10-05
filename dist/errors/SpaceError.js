"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceError = void 0;
class SpaceError extends Error {
    constructor(message) {
        super(message);
        this.name = "SpaceError";
    }
}
exports.SpaceError = SpaceError;
