"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cybercafe = void 0;
const Space_1 = require("../models/Space");
const request_1 = require("../utils/request");
class Cybercafe {
    constructor(apiKey = null, baseUrl = "https://api.cybercafe.space") {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    /**
      * Get a `Space` instance for controlling an existing space.
      *
      * @param {string} spaceId - ID of the space.
      * @returns {Space}
      */
    space(spaceId) {
        return new Space_1.Space(this.baseUrl, this.apiKey, spaceId);
    }
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
    async createSpace(name, location, type) {
        return (0, request_1.request)(`${this.baseUrl}/v1/spaces/create`, {
            method: "POST",
            headers: this.apiKey ? { "x-api-key": this.apiKey } : {},
            data: { name, location, type },
        });
    }
    /**
   * Delete an existing space
   * @param spaceId - The ID of the space to delete
   * @returns {Promise<{ success: boolean; message: string }>} API response
   *
   * @example
   * await client.deleteSpace("space123");
   */
    async deleteSpace(spaceId) {
        return (0, request_1.request)(`${this.baseUrl}/v1/spaces/delete`, {
            method: "POST",
            headers: this.apiKey ? { "x-api-key": this.apiKey } : {},
            data: { space_id: spaceId },
        });
    }
    /**
   * List all spaces belonging to the authenticated user.
   *
   * @returns A list of the user's spaces with basic metadata:
   *          - location: the Azure region where the VM is hosted
   *          - type: the machine type (used for billing rates)
   *          - name: the username assigned to the machine
   */
    async listSpaces() {
        return (0, request_1.request)(`${this.baseUrl}/v1/spaces`, {
            method: "GET",
            headers: this.apiKey ? { "x-api-key": this.apiKey } : {},
        });
    }
}
exports.Cybercafe = Cybercafe;
