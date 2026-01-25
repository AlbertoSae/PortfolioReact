/**
 * Detects if a URL or imported asset corresponds to a video format.
 * Supports mp4, webm, and ogg, even with Vite's development query parameters.
 */
export const isVideo = (url) => typeof url === 'string' && /\.(mp4|webm|ogg)($|\?)/i.test(url);
