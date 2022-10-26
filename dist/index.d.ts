import {UserConfigExport} from "vite";

/**
 * Returns the merged config
 *
 * @param config Config to merge with the default common one
 */
export default function osmConfig(config?: UserConfigExport): UserConfigExport;

/**
 * Returns the vite config object
 *
 * @param config Config to merge with the default common one
 */
export declare function defineConfig(config?: UserConfigExport): UserConfigExport;
