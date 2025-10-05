"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerShellController = void 0;
/**
 * PowerShellController
 * Handles sending PowerShell commands to a space/VM.
 */
class PowerShellController {
    constructor(space) {
        this.space = space;
    }
    /**
     * Send a PowerShell command to the space/VM.
     *
     * @param {string} command - The PowerShell command to execute.
     * @returns {Promise<string>} Message from the command execution.
     *
     * @example
     * const result = await space.PowerShell.sendCommand("Get-Process | Select-Object -First 5");
     * console.log(result);
     */
    async sendCommand(command) {
        if (typeof command !== "string" || command.trim() === "") {
            throw new Error("Command must be a non-empty string");
        }
        const response = await this.space._request("POST", "/powershell", { command });
        return response.message ?? "";
    }
}
exports.PowerShellController = PowerShellController;
