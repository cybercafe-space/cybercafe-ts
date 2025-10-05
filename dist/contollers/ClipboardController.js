"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardController = void 0;
/**
 * ClipboardController
 * Handles clipboard operations: set and get text.
 */
class ClipboardController {
    constructor(space) {
        this.space = space;
    }
    /**
     * Set text into the space clipboard.
     *
     * @param {string} text - The text to copy into the clipboard.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Clipboard.setText("Hello from Cybercafe!");
     */
    async setText(text) {
        return this.space._request("POST", "/clipboard", { text });
    }
    /**
     * Get text currently stored in the space clipboard.
     *
     * @returns {Promise<string>} Clipboard text.
     *
     * @example
     * const text = await space.Clipboard.getText();
     * console.log(text); // e.g. "Hello from Cybercafe!"
     */
    async getText() {
        const response = await this.space._request("GET", "/clipboard");
        return response.text;
    }
}
exports.ClipboardController = ClipboardController;
