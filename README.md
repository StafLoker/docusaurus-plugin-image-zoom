<div align="center">
   <h1><b>docusaurus-plugin-image-zoom</b></h1>
   <p><i>Image zoom modal with pan and scroll zoom for Docusaurus</i></p>
   <p align="center">
      <a href="https://www.npmjs.com/package/docusaurus-plugin-image-zoom">npm</a> ·
      <a href="https://github.com/StafLoker/docusaurus-plugin-image-zoom/releases">Releases</a>
   </p>
</div>

<div align="center">
   <a href="https://github.com/StafLoker/docusaurus-plugin-image-zoom/releases"><img src="https://img.shields.io/github/release-pre/StafLoker/docusaurus-plugin-image-zoom.svg?style=flat" alt="latest version"/></a>
   <a href="https://github.com/StafLoker/docusaurus-plugin-image-zoom/blob/main/LICENSE"><img src="https://img.shields.io/github/license/StafLoker/docusaurus-plugin-image-zoom.svg?style=flat" alt="license"/></a>
</div>


# Features

- Click image to open full-resolution modal
- Scroll to zoom in/out anchored to cursor position
- Drag to pan when zoomed in
- Close with click outside or `Escape`
- Respects Docusaurus theme colors and border radius
- Two components: base (`ImageZoom`) and optimized (`ImageZoomIdeal` via `plugin-ideal-image`)


# Installation

```bash
npm install docusaurus-plugin-image-zoom
```

Add to `docusaurus.config.js`:

```js
export default {
  plugins: [
    // Required only if using ImageZoomIdeal
    ['@docusaurus/plugin-ideal-image', { quality: 85, max: 1920, min: 640, steps: 3 }],
    'docusaurus-plugin-image-zoom',
  ],
};
```


# Usage

### `@theme/ImageZoom` — base

Works with any image URL. No extra dependencies required.

```mdx
import ImageZoom from '@theme/ImageZoom';

<ImageZoom src={require('./my-image.png').default} alt="Description" />
<ImageZoom src="/img/my-image.png" alt="Description" />
```

### `@theme/ImageZoomIdeal` — with plugin-ideal-image

Requires `@docusaurus/plugin-ideal-image`. Serves a lazy-loaded optimized thumbnail in the page and opens the highest resolution version in the modal.

```mdx
import ImageZoomIdeal from '@theme/ImageZoomIdeal';

<ImageZoomIdeal img={require('./my-image.png')} alt="Description" />
```


# Props

### ImageZoom

| Prop  | Type   | Description       |
| ----- | ------ | ----------------- |
| `src` | string | Image URL or path |
| `alt` | string | Alt text          |

### ImageZoomIdeal

| Prop  | Type   | Description                                              |
| ----- | ------ | -------------------------------------------------------- |
| `img` | object | `require('./img.png')` processed by `plugin-ideal-image` |
| `alt` | string | Alt text                                                 |
