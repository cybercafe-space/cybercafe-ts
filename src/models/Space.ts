import { MouseController } from "../contollers/MouseController";
import { KeyboardController } from "../contollers/KeyboardController";
import { ScreenController } from "../contollers/ScreenController";
import { ClipboardController } from "../contollers/ClipboardController";
import { FilesController } from "../contollers/FilesController";
import { PowerShellController } from "../contollers/PowershellController";
import { request } from "../utils/request";

export class Space {
    public Mouse: MouseController;
    public Keyboard: KeyboardController;
    public Screen: ScreenController;
    public Clipboard: ClipboardController;
    public Files: FilesController;
    public PowerShell: PowerShellController;

    constructor(
        private baseUrl: string,
        private apiKey: string | null,
        private spaceId: string
    ) {
        this.Mouse = new MouseController(this);
        this.Keyboard = new KeyboardController(this);
        this.Screen = new ScreenController(this);
        this.Clipboard = new ClipboardController(this);
        this.Files = new FilesController(this);
        this.PowerShell = new PowerShellController(this);

    }

    // generic request for controllers
    async _request<T>(
        method: "GET" | "POST" | "DELETE",
        endpoint: string,
        data?: any,
        responseType?: "json" | "arraybuffer" | "text"
    ): Promise<T> {
        const url = `${this.baseUrl}/v1/spaces/${this.spaceId}${endpoint}`;
        const headers: Record<string, string> = {};

        if (this.apiKey) {
            headers["x-api-key"] = this.apiKey;
        }

        return request<T>(url, {
            method,
            headers,
            data,
            responseType,
        });
    }

    /**
     * Get the current status of the space.
     *
     * @returns {Promise<{ status: string }>} The current space status (e.g. "running", "stopped").
     *
     * @example
     * const result = await space.status();
     * console.log(result.status); // "running"
     */
    async status(): Promise<{ status: string }> {
        return this._request("POST", "/status");
    }

    /**
     * Stop the space.
     *
     * @returns {Promise<{ state: string }>} The new state of the space (e.g. "stopped").
     *
     * @example
     * const result = await space.stop();
     * console.log(result.state); // "stopped"
     */
    async stop(): Promise<{ state: string }> {
        return this._request("POST", "/stop");
    }

    /**
    * Start the space.
    *
    * @returns {Promise<{ state: string }>} The new state of the space (e.g. "running").
    *
    * @example
    * const result = await space.start();
    * console.log(result.state); // "running"
    */
    async start(): Promise<{ state: string }> {
        return this._request("POST", "/start");
    }

    /**
     * Restart the space.
     *
     * @returns {Promise<{ state: string }>} The new state of the space (e.g. "running").
     *
     * @example
     * const result = await space.restart();
     * console.log(result.state); // "running"
     */
    async restart(): Promise<{ state: string }> {
        return this._request("POST", "/restart");
    }



}
