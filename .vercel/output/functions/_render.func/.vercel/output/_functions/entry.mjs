import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C3e6vha3.mjs';
import { manifest } from './manifest_nR5ghJk2.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_C7iKmLJ6.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_BV_lU8Kc.mjs')],
]);;

const _page0 = () => import('./pages/libro/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libro/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1a45d7bb-29f5-4d6e-8286-b0e6be86c512",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
