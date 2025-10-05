import { Space } from "../models/Space";
/**
 * ScreenController
 * Handles screen operations.
 */
export declare class ScreenController {
    private space;
    constructor(space: Space);
    /**
     * Take a screenshot of the current space.
     *
     * @returns {Promise<string>} Base64 encoded screenshot.
     *
     * @example
     * const image = await space.Screen.screenshot();
     * console.log(image); // "data:image/png;base64,..."
     */
    screenshot(): Promise<string>;
}
