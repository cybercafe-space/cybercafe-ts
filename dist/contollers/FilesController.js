"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const form_data_1 = __importDefault(require("form-data"));
/**
 * FilesController
 * Handles file uploads to the VM associated with a Space.
 */
class FilesController {
    constructor(space) {
        this.space = space;
    } // typed as Space
    /**
    * Upload a file buffer to this space.
    *
    * @param file - The file to upload (Buffer)
    * @param filename - Filename for the upload
    * @param destinationPath - Optional destination path to place the file. Defaults to C:\\\\Users\\\\USERNAME\\\\Downloads
    * @returns {Promise<{ message: string }>} API response
    *
    * @example
    * const buffer = fs.readFileSync("example.txt");
    * await space.Files.upload(buffer, "example.txt", "C:\\Temp\\");
    */
    async upload(file, filename, destinationPath) {
        const form = new form_data_1.default(); // Node.js form-data
        form.append("file", file, {
            filename: filename || "file.dat",
            contentType: "application/octet-stream",
        });
        if (destinationPath) {
            form.append("destinationPath", destinationPath);
        }
        return this.space._request("POST", "/files/upload", form);
    }
    /**
 * Downloads a file from the remote space to a Buffer
 *
 * @param filePath - The full path to the file on the remote machine
 * @returns Promise<Buffer> - The file content as a Buffer
 *
 * @example
 * const fileBuffer = await space.Files.download("C:\\Users\\Brian\\Desktop\\photo.jpg");
 * fs.writeFileSync("photo.jpg", fileBuffer);
 *
 * @throws {SpaceError} When the file doesn't exist or download fails
 */
    async download(filePath) {
        const response = await this.space._request("POST", "/files/download", { filePath }, "arraybuffer");
        return Buffer.from(response);
    }
    async action(action, body) {
        return this.space._request("POST", "/files", { action, ...body });
    }
    /**
     * Move a file or folder to a new location.
     *
     * @param targetPath - Full path of the file/folder to move
     * @param newPath - Destination path
     * @returns {Promise<{ success: boolean; message: string }>}
     *
     * @example
     * await space.Files.move("C:\\Temp\\example.txt", "C:\\Users\\Brian\\Documents\\example.txt");
     */
    async move(targetPath, newPath) {
        return this.action("move", {
            targetPath,
            newPath,
        });
    }
    /**
     * Copy a file or folder to a new location.
     *
     * @param targetPath - Full path of the file/folder to copy
     * @param newPath - Destination path
     * @returns {Promise<{ success: boolean; message: string }>}
     *
     * @example
     * await space.Files.copy("C:\\Temp\\example.txt", "C:\\Users\\Brian\\Documents\\example.txt");
     */
    async copy(targetPath, newPath) {
        return this.action("copy", {
            targetPath,
            newPath,
        });
    }
    /**
     * Rename a file or folder.
     *
     * @param targetPath - Full path of the file/folder to rename
     * @param newName - The new name (without path)
     * @returns {Promise<{ success: boolean; message: string }>}
     *
     * @example
     * await space.Files.rename("C:\\Temp\\oldname.txt", "newname.txt");
     */
    async rename(targetPath, newName) {
        return this.action("rename", {
            targetPath,
            newName,
        });
    }
    /**
     * Delete a file or folder and its contents.
     *
     * @param targetPath - Full path of the file/folder to delete
     * @returns {Promise<{ success: boolean; message: string }>}
     *
     * @example
     * await space.Files.delete("C:\\Temp\\unused_folder");
     * await space.Files.delete("C:\\Users\\Brian\\Documents\\example.txt");
     */
    async delete(targetPath) {
        return this.action("delete", {
            targetPath,
        });
    }
    /**
     * Create a new directory.
     *
     * @param targetPath - Full path of the directory to create
     * @returns {Promise<{ success: boolean; message: string }>}
     *
     * @example
     * await space.Files.mkdir("C:\\Users\\Brian\\Projects\\NewFolder");
     */
    async mkdir(targetPath) {
        return this.action("mkdir", {
            targetPath,
        });
    }
    /**
     * List files and folders in a directory.
     *
     * @param targetPath - Directory path to list
     * @returns {Promise<{ success: boolean; message: Array<{ Name: string; FullName: string; Mode: string; Length: number; LastWriteTime: string }> }>}
     *
     * @example
     * const files = await space.Files.list("C:\\Users\\Brian\\Documents");
     * console.log(files);
     */
    async list(targetPath) {
        return this.action("list", { targetPath });
    }
    /**
     * Get detailed info about a file or folder.
     *
     * @param targetPath - Full path of the file/folder
     * @returns {Promise<{ success: boolean; message: { Name: string; FullName: string; Mode: string; Length: number; LastWriteTime: string; CreationTime: string; Attributes: string } }>}
     *
     * @example
     * const info = await space.Files.info("C:\\Users\\Brian\\Documents\\report.docx");
     * console.log(info);
     */
    async info(targetPath) {
        return this.action("info", { targetPath });
    }
}
exports.FilesController = FilesController;
