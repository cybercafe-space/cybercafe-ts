import { Space } from "../models/Space";

/**
 * PowerShellController
 * Handles sending PowerShell commands to a space/VM.
 */
export class PowerShellController {
    constructor(private space: Space) { }


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
    async sendCommand(command: string): Promise<string> {
        if (typeof command !== "string" || command.trim() === "") {
            throw new Error("Command must be a non-empty string");
        }

        const response = await this.space._request<{ success?: boolean; message?: string; error?: string }>(
            "POST",
            "/powershell",
            { command }
        );

        return response.message ?? "";
    }
}
