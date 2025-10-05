import { Space } from "../models/Space";
import { Screenshot } from "../utils/types";

/**
 * ScreenController
 * Handles screen operations.
 */
export class ScreenController {
    constructor(private space: Space) { }

    /**
     * Take a screenshot of the current space.
     *
     * @returns {Promise<string>} Base64 encoded screenshot.
     *
     * @example
     * const image = await space.Screen.screenshot();
     * console.log(image); // "data:image/png;base64,..."
     */
    async screenshot(): Promise<string> {
        const response = await this.space._request<Screenshot>("GET", "/screenshot");
        return response.image;
    }
}
