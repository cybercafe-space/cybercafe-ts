import { Space } from "../models/Space";
/**
 * PowerShellController
 * Handles sending PowerShell commands to a space/VM.
 */
export declare class PowerShellController {
    private space;
    constructor(space: Space);
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
    sendCommand(command: string): Promise<string>;
}
