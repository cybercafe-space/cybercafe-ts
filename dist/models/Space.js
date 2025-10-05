"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = void 0;
const MouseController_1 = require("../contollers/MouseController");
const KeyboardController_1 = require("../contollers/KeyboardController");
const ScreenController_1 = require("../contollers/ScreenController");
const ClipboardController_1 = require("../contollers/ClipboardController");
const FilesController_1 = require("../contollers/FilesController");
const PowershellController_1 = require("../contollers/PowershellController");
const request_1 = require("../utils/request");
class Space {
    constructor(baseUrl, apiKey, spaceId) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.spaceId = spaceId;
        this.Mouse = new MouseController_1.MouseController(this);
        this.Keyboard = new KeyboardController_1.KeyboardController(this);
        this.Screen = new ScreenController_1.ScreenController(this);
        this.Clipboard = new ClipboardController_1.ClipboardController(this);
        this.Files = new FilesController_1.FilesController(this);
        this.PowerShell = new PowershellController_1.PowerShellController(this);
    }
    // generic request for controllers
    async _request(method, endpoint, data, responseType) {
        const url = `${this.baseUrl}/v1/spaces/${this.spaceId}${endpoint}`;
        const headers = {};
        if (this.apiKey) {
            headers["x-api-key"] = this.apiKey;
        }
        return (0, request_1.request)(url, {
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
    async status() {
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
    async stop() {
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
    async start() {
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
    async restart() {
        return this._request("POST", "/restart");
    }
}
exports.Space = Space;
