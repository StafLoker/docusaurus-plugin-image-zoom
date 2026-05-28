# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2026-05-28

### Removed
- `captionAlign` prop — the caption always follows the image's centered layout, so per-image alignment is dropped

## [1.1.1] - 2026-05-28

### Fixed
- `captionAlign` prop now works correctly — caption had no width in the flex container, so `text-align` had no effect
- Clarified that `showCaption` is a boolean and must be passed with curly braces (`showCaption={false}`), not as a string attribute

## [1.1.0] - 2026-05-28

### Added
- Image caption displayed below the image in the page, taken from the `alt` attribute
- `showCaption` prop (default `true`) to toggle caption visibility on `ImageZoom` and `ImageZoomIdeal`
- `captionAlign` prop (default `'center'`) to align caption: `'left'`, `'center'`, or `'right'`

## [1.0.0] - 2026-05-28

### Added
- `ImageZoom` component — click to open full-resolution modal
- Scroll to zoom in/out anchored to cursor position
- Drag to pan when zoomed in
- Close with click outside or `Escape`
- `ImageZoomIdeal` component — integrates with `@docusaurus/plugin-ideal-image`
- Respects Docusaurus theme colors and border radius
