// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-tags-js": () => import("./../src/pages/tags.js" /* webpackChunkName: "component---src-pages-tags-js" */),
  "component---src-pages-using-typescript-tsx": () => import("./../src/pages/using-typescript.tsx" /* webpackChunkName: "component---src-pages-using-typescript-tsx" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-page-js": () => import("./../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-tags-js": () => import("./../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */)
}
