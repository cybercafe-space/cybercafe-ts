"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = request;
const SpaceError_1 = require("../errors/SpaceError");
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
async function request(url, options = {}) {
    try {
        const axiosConfig = {
            method: options.method || "GET",
            url,
            headers: {
                ...options.headers,
            },
            responseType: options.responseType || "json",
            data: undefined,
        };
        if (options.data) {
            axiosConfig.data = options.data;
            // If it's FormData, let axios set headers automatically
            if (options.data instanceof form_data_1.default) {
                axiosConfig.headers = {
                    ...axiosConfig.headers,
                    ...options.data.getHeaders(),
                };
            }
            else {
                axiosConfig.headers = {
                    ...axiosConfig.headers,
                    "Content-Type": "application/json",
                };
            }
        }
        const response = await (0, axios_1.default)(axiosConfig);
        return response.data;
    }
    catch (err) {
        const message = err.response?.data?.error || err.message;
        throw new SpaceError_1.SpaceError(message);
    }
}
