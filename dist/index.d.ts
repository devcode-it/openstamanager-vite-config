import {UserConfig} from "vite";

/**
 * Returns the merged config
 *
 * @param config Config to merge with the default common one
 */
export default function osmConfig(config?: UserConfig): Object;

/**
 * Returns the vite config object
 *
 * @param config Config to merge with the default common one
 */
export declare function defineConfig(config?: UserConfig): import("vite").UserConfigExport;
