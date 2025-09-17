# Background Image Instructions

## Adding a PNG Background Image

To add a `background.png` file to the Hero Section, follow these steps:

1. **Create or obtain your background image**:
   - Recommended size: 1920x1080 pixels (or similar aspect ratio)
   - Format: PNG with transparency support
   - File name: `background.png`

2. **Place the file**:
   - Save your `background.png` file in the `public/` folder
   - The file should be located at: `public/background.png`

3. **Update the Hero Section** (if needed):
   The Hero Section is already configured to use a background image. If you want to use a PNG instead of the current SVG, replace this line in `src/App.vue`:

   ```html
   <img src="/background.svg" alt="Background" class="w-full h-full object-cover opacity-20">
   ```

   With:

   ```html
   <img src="/background.png" alt="Background" class="w-full h-full object-cover opacity-20">
   ```

## Current Background

The Hero Section currently uses:
- **SVG Background**: `public/background.svg` - A custom-designed technical background with barrier system silhouettes
- **Gradient Overlay**: Blue gradient overlay for better text readability
- **Opacity**: 20% opacity for subtle background effect

## Background Features

The current background includes:
- Blue gradient base matching the brand colors
- Subtle grid pattern overlay
- Abstract geometric shapes
- Silhouettes of barrier systems, cameras, and control panels
- Low opacity for text readability

## Customization

You can customize the background by:
1. Replacing `background.svg` with your own image
2. Adjusting the opacity (currently 20%)
3. Modifying the gradient overlay colors
4. Adding or removing background elements

## File Formats Supported

- **SVG**: Vector format, scalable, small file size
- **PNG**: Raster format, supports transparency
- **JPG**: Raster format, smaller file size (no transparency)
- **WebP**: Modern format, excellent compression
