"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenController = void 0;
/**
 * ScreenController
 * Handles screen operations.
 */
class ScreenController {
    constructor(space) {
        this.space = space;
    }
    /**
     * Take a screenshot of the current space.
     *
     * @returns {Promise<string>} Base64 encoded screenshot.
     *
     * @example
     * const image = await space.Screen.screenshot();
     * console.log(image); // "data:image/png;base64,..."
     */
    async screenshot() {
        const response = await this.space._request("GET", "/screenshot");
        return response.image;
    }
    /**
     * Generate a public interactive stream URL for the current space.
     *
     * This creates a temporary, publicly accessible URL that anyone can use to
     * view or embed the live stream of this space. The URL can be safely shared
     * or embedded on external websites (e.g. in an <iframe>).
     *
     * @returns {Promise<string>} The public stream URL.
     *
     * @example
     * const url = await space.Screen.stream();
     * console.log(url); // "https://cybercafe.space/stream?id=abc123"
     */
    async stream() {
        const response = await this.space._request("GET", `/stream_url`);
        return response.stream_url;
    }
}
exports.ScreenController = ScreenController;
