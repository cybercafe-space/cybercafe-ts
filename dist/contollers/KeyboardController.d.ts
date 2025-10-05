import { Space } from "../models/Space";
/**
 * KeyboardController
 * Handles keyboard input, key presses, and text typing.
 */
export declare class KeyboardController {
    private space;
    constructor(space: Space);
    /**
     * Type text into the current space.
     *
     * @param {string} text - Text to type.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Keyboard.type("Hello, world!");
     */
    type(text: string): Promise<any>;
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
    press(keys: string | string[]): Promise<any>;
}
