import type LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = { "general": { "mode": "light", "primaryColor": "#50CD89", "pageWidth": "default", "layout": "dark-header", "iconsType": "solid" }, "header": { "display": true, "default": { "container": "fixed", "fixed": { "desktop": true, "mobile": false }, "menu": { "display": true, "iconType": "keenthemes" } } }, "sidebar": { "display": false, "default": { "minimize": { "desktop": { "enabled": true, "default": false, "hoverable": true } }, "menu": { "iconType": "keenthemes" } } }, "toolbar": { "display": true, "container": "fixed", "fixed": { "desktop": false, "mobile": false } }, "pageTitle": { "display": true, "breadcrumb": true, "direction": "column" }, "content": { "container": "fixed" }, "footer": { "display": true, "container": "fixed", "fixed": { "desktop": false, "mobile": false } }, "illustrations": { "set": "sketchy-1" }, "scrolltop": { "display": true } }

export default config;
