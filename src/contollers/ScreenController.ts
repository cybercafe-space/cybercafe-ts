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
    async stream(): Promise<string> {
        const response = await this.space._request<{ id: string; stream_url: string }>(
            "GET",
            `/stream_url`
        );
        return response.stream_url;
    }
}
