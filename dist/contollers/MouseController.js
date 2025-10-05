"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseController = void 0;
/**
 * MouseController
 * Provides methods for simulating mouse interactions in a Space.
 */
class MouseController {
    constructor(space) {
        this.space = space;
    }
    /**
   * Move the mouse cursor to the given coordinates.
   *
   * @param options.point - Target coordinates `[x, y]`.
   * @returns API response.
   *
   * @example
   * await space.Mouse.move({ point: [100, 200] });
   */
    async move({ point, }) {
        return this.space._request("POST", "/mouse", {
            action: "move",
            point,
        });
    }
    /**
     * Click at the given coordinates, or at the current cursor position if `point` is omitted.
     * @param options.button - Mouse button to click. Can be `"left"`, `"middle"`, or `"right"`. Defaults to `"left"`.
     * @param options.point - Optional coordinates `[x, y]`. If omitted, click at current cursor position.
     * @param options.count - Number of times to click. Must be between 1 and 10. Defaults to 1.
     * @returns API response.
     *
     * @example
     * // Left click at (150, 200)
     * await space.Mouse.click({ point: [150, 200] });
     *
     * @example
     * // Right click at current cursor position
     * await space.Mouse.click({ button: "right" });
     *
     * @example
     * // Double click at (300, 400)
     * await space.Mouse.click({ point: [300, 400], count: 2 });
     */
    async click({ button = "left", point, count = 1, } = {}) {
        const clicks = Math.min(Math.max(count, 1), 10);
        return this.space._request("POST", "/mouse", {
            action: "click",
            point,
            button,
            count: clicks,
        });
    }
    /**
     * Scroll in the specified direction.
     *
     * @param options.direction - Direction to scroll. Can be `"up"` or `"down"`.
     * @param options.point - Optional `[x, y]` coordinates to scroll from. Defaults to current cursor position if omitted.
     * @returns API response.
     *
     * @example
     * // Scroll down from current cursor position
     * await space.Mouse.scroll({ direction: "down" });
     *
     * @example
     * // Scroll up from specific coordinates
     * await space.Mouse.scroll({ direction: "up", point: [100, 200] });
     */
    async scroll({ direction, point, }) {
        return this.space._request("POST", "/mouse", {
            action: "scroll",
            direction,
            point,
        });
    }
    /**
     * Drag the mouse along a series of points.
     *
     * @param options.path - List of `[x, y]` coordinate pairs defining the drag path.
     *                        The first point can be considered the start; if omitted, starts from current cursor position.
     * @returns {Promise<any>} API response.
     *
     * @example
     * // Drag from (10, 10) -> (50, 50) -> (200, 200)
     * await space.Mouse.drag({ path: [[10, 10], [50, 50], [200, 200]] });
     *
     * @example
     * // Drag from current cursor -> (200, 200)
     * await space.Mouse.drag({ path: [[200, 200]] });
     */
    async drag({ path, }) {
        if (!Array.isArray(path) || path.length === 0) {
            throw new Error("'path' must be a non-empty array of [x, y] pairs");
        }
        // Optional: validate each element is a [x, y] array
        for (const point of path) {
            if (!Array.isArray(point) || point.length !== 2) {
                throw new Error("Each point in 'path' must be [x, y]");
            }
        }
        return this.space._request("POST", "/mouse", { action: "drag", path });
    }
    /**
     * Get the current mouse position.
     *
     * @returns Current mouse coordinates as `[x, y]`.
     *
     * @example
     * const point = await space.Mouse.position();
     * const [x, y] = point;
     * console.log(`Mouse is at ${x},${y}`);
     */
    async position() {
        const response = await this.space._request("GET", "/mouse");
        return response.point;
    }
}
exports.MouseController = MouseController;
