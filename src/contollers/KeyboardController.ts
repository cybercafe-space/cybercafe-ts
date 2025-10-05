import { Space } from "../models/Space";

/**
 * KeyboardController
 * Handles keyboard input, key presses, and text typing.
 */
export class KeyboardController {
    constructor(private space: Space) { }

    /**
     * Type text into the current space.
     *
     * @param {string} text - Text to type.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Keyboard.type("Hello, world!");
     */
    async type(text: string): Promise<any> {
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
    async press(keys: string | string[]): Promise<any> {
        const keyArray = Array.isArray(keys) ? keys : [keys];
        return this.space._request("POST", "/keyboard", { keys: keyArray });
    }
}
