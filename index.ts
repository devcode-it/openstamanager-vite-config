// noinspection JSUnusedGlobalSymbols

import autoprefixer from "autoprefixer";
import {defineConfig as viteConfig, UserConfigExport} from "vite";
import {deepmerge} from "deepmerge-ts";

const osm_config: UserConfigExport = {
    assetsInclude: ['js', 'jpg', 'png', 'webp', 'txt'],
    build: {
        target: 'esnext',
        // rollupOptions: {
        //     // output: {
        //     //     // manualChunks: {},
        //     //     entryFileNames: '[name].js',
        //     //     chunkFileNames: '[name].js',
        //     //     assetFileNames: '[name].[ext]'
        //     // },
        //     preserveEntrySignatures: 'allow-extension'
        // }
    },
    css: {
        postcss: {
            plugins: [autoprefixer()]
        }
    },
    esbuild: {
        jsxFactory: 'm',
        jsxFragment: "'['"
    }
};

/**
 * Returns the merged config
 *
 * @param config Config to merge with the default common one
 */
export default function osmConfig(config: UserConfigExport = {}) {
    return deepmerge(osm_config, config);
}

/**
 * Returns the vite config object
 *
 * @param config Config to merge with the default common one
 */
export function defineConfig(config: UserConfigExport = {}) {
    return viteConfig(osmConfig(config));
}
