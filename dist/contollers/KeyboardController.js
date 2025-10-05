"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardController = void 0;
/**
 * KeyboardController
 * Handles keyboard input, key presses, and text typing.
 */
class KeyboardController {
    constructor(space) {
        this.space = space;
    }
    /**
     * Type text into the current space.
     *
     * @param {string} text - Text to type.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Keyboard.type("Hello, world!");
     */
    async type(text) {
        return this.space._request("POST", "/keyboard", { text });
    }
    /**
     * Press one or more keys.
     *
     * @param {string|string[]} keys - Key or array of keys to press.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Keyboard.press("Windows");
     * await space.Keyboard.press(["Control", "C"]);
     */
    async press(keys) {
        const keyArray = Array.isArray(keys) ? keys : [keys];
        return this.space._request("POST", "/keyboard", { keys: keyArray });
    }
}
exports.KeyboardController = KeyboardController;
