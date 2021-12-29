// noinspection JSUnusedGlobalSymbols

import autoprefixer from "autoprefixer";
import {UserConfig, defineConfig as viteConfig} from "vite";
import {flowPlugin, esbuildFlowPlugin} from '@bunchtogether/vite-plugin-flow';

function merge(obj1: Object, obj2: Object) {
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

const osm_config: UserConfig = {
    assetsInclude: ['js', 'jpg', 'png', 'webp', 'txt'],
    build: {
        minify: false,
        rollupOptions: {
            manualChunks: {},
            output: {
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
        target: 'es2020',
        jsxFactory: 'm',
        jsxFragment: "'['"
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildFlowPlugin(/\.(flow|jsx?)$/, path => (/\.jsx$/.test(path) ? 'jsx' : 'js'), {
                all: true,
                pretty: true,
                ignoreUninitializedFields: false
            })]
        }
    },
    plugins: [
        flowPlugin({
            include: /\.(flow|jsx?)$/,
            exclude: /node_modules/,
            flow: {
                all: true,
                pretty: true,
                ignoreUninitializedFields: false
            }
        })
    ]
}

/**
 * Returns the merged config
 *
 * @param config Config to merge with the default common one
 */
export default function osmConfig(config: UserConfig) {
    return merge(osm_config, config);
}

/**
 * Returns the vite config object
 *
 * @param config Config to merge with the default common one
 */
export function defineConfig(config: UserConfig) {
    return viteConfig(osmConfig(config));
}
