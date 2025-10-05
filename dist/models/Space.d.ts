import { MouseController } from "../contollers/MouseController";
import { KeyboardController } from "../contollers/KeyboardController";
import { ScreenController } from "../contollers/ScreenController";
import { ClipboardController } from "../contollers/ClipboardController";
import { FilesController } from "../contollers/FilesController";
import { PowerShellController } from "../contollers/PowershellController";
export declare class Space {
    private baseUrl;
    private apiKey;
    private spaceId;
    Mouse: MouseController;
    Keyboard: KeyboardController;
    Screen: ScreenController;
    Clipboard: ClipboardController;
    Files: FilesController;
    PowerShell: PowerShellController;
    constructor(baseUrl: string, apiKey: string | null, spaceId: string);
    _request<T>(method: "GET" | "POST" | "DELETE", endpoint: string, data?: any, responseType?: "json" | "arraybuffer" | "text"): Promise<T>;
    /**
     * Get the current status of the space.
     *
     * @returns {Promise<{ status: string }>} The current space status (e.g. "running", "stopped").
     *
     * @example
     * const result = await space.status();
     * console.log(result.status); // "running"
     */
    status(): Promise<{
        status: string;
    }>;
    /**
     * Stop the space.
     *
     * @returns {Promise<{ state: string }>} The new state of the space (e.g. "stopped").
     *
     * @example
     * const result = await space.stop();
     * console.log(result.state); // "stopped"
     */
    stop(): Promise<{
        state: string;
    }>;
    /**
    * Start the space.
    *
    * @returns {Promise<{ state: string }>} The new state of the space (e.g. "running").
    *
    * @example
    * const result = await space.start();
    * console.log(result.state); // "running"
    */
    start(): Promise<{
        state: string;
    }>;
    /**
     * Restart the space.
     *
     * @returns {Promise<{ state: string }>} The new state of the space (e.g. "running").
     *
     * @example
     * const result = await space.restart();
     * console.log(result.state); // "running"
     */
    restart(): Promise<{
        state: string;
    }>;
}
