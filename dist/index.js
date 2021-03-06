"use strict";
// noinspection JSUnusedGlobalSymbols
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.defineConfig = void 0;
const autoprefixer_1 = __importDefault(require("autoprefixer"));
const vite_1 = require("vite");
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
            plugins: [(0, autoprefixer_1.default)()]
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
function osmConfig(config = {}) {
    return merge(osm_config, config);
}
exports.default = osmConfig;

/**
 * Returns the vite config object
 *
 * @param config Config to merge with the default common one
 */
function defineConfig(config = {}) {
    return (0, vite_1.defineConfig)(osmConfig(config));
}
exports.defineConfig = defineConfig;
//# sourceMappingURL=index.js.map
