export declare function request<T>(url: string, options?: RequestInit & {
    data?: any;
    responseType?: "json" | "arraybuffer" | "text";
}): Promise<T>;
