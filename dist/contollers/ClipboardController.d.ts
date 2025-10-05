import { Space } from "../models/Space";
/**
 * ClipboardController
 * Handles clipboard operations: set and get text.
 */
export declare class ClipboardController {
    private space;
    constructor(space: Space);
    /**
     * Set text into the space clipboard.
     *
     * @param {string} text - The text to copy into the clipboard.
     * @returns {Promise<any>} API response.
     *
     * @example
     * await space.Clipboard.setText("Hello from Cybercafe!");
     */
    setText(text: string): Promise<any>;
    /**
     * Get text currently stored in the space clipboard.
     *
     * @returns {Promise<string>} Clipboard text.
     *
     * @example
     * const text = await space.Clipboard.getText();
     * console.log(text); // e.g. "Hello from Cybercafe!"
     */
    getText(): Promise<string>;
}
