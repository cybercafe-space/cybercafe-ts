import { Space } from "../models/Space";
export declare class Cybercafe {
    private apiKey;
    private baseUrl;
    constructor(apiKey?: string | null, baseUrl?: string);
    /**
      * Get a `Space` instance for controlling an existing space.
      *
      * @param {string} spaceId - ID of the space.
      * @returns {Space}
      */
    space(spaceId: string): Space;
    /**
       * Create a new space.
       *
       * @param {string} name - The username for the space.
       * @param {string} location - The space region.
       * @param {number} type - The space type.
       * @returns {Promise<{ success: boolean; message: string }>} Response indicating space creation status.
       *
       * @example
       * const result = await client.createSpace("brian", "eastus", 1);
       * console.log(result.message); // "Space creation started"
       */
    createSpace(name: string, location: string, type: number): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
   * Delete an existing space
   * @param spaceId - The ID of the space to delete
   * @returns {Promise<{ success: boolean; message: string }>} API response
   *
   * @example
   * await client.deleteSpace("space123");
   */
    deleteSpace(spaceId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
   * List all spaces belonging to the authenticated user.
   *
   * @returns A list of the user's spaces with basic metadata:
   *          - location: the Azure region where the VM is hosted
   *          - type: the machine type (used for billing rates)
   *          - name: the username assigned to the machine
   */
    listSpaces(): Promise<{
        location: string;
        type: number;
        name: string | null;
    }[]>;
}
