import { Space } from "../models/Space";

/**
 * ClipboardController
 * Handles clipboard operations: set and get text.
 */
export class ClipboardController {
    constructor(private space: Space) { }

    /**
     * Set text into the space clipboard.
     *
     * @param {string} text - The text to copy into the clipboard.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Clipboard.setText("Hello from Cybercafe!");
     */
    async setText(text: string): Promise<any> {
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
    async getText(): Promise<string> {
        const response = await this.space._request<{ text: string }>("GET", "/clipboard");
        return response.text;
    }
}
