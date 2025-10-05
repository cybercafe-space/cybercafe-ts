"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenController = void 0;
/**
 * ScreenController
 * Handles screen capture and display operations.
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
}
exports.ScreenController = ScreenController;
