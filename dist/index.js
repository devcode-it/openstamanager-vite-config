// noinspection JSUnusedGlobalSymbols
import autoprefixer from "autoprefixer";
import {defineConfig as viteConfig} from "vite";

function merge(obj1, obj2) {
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                merge(obj1[key], obj2[key]);
                continue;
            }
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}
const osm_config = {
    assetsInclude: ['js', 'jpg', 'png', 'webp', 'txt'],
    build: {
        target: 'esnext',
        minify: false,
        rollupOptions: {
            output: {
                // manualChunks: {},
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            },
            preserveEntrySignatures: 'allow-extension'
        }
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
export default function osmConfig(config = {}) {
    return merge(osm_config, config);
}

/**
 * Returns the vite config object
 *
 * @param config Config to merge with the default common one
 */
export function defineConfig(config = {}) {
    return viteConfig(osmConfig(config));
}
//# sourceMappingURL=index.js.map
