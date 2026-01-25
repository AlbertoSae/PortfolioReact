import React from 'react';
import { isVideo } from '../../utils/mediaUtils';

/**
 * Reusable component to render images or videos with optimized properties.
 */
const MediaRenderer = ({ src, alt, className, isPreview = false, onClick }) => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        muted={isPreview}
        loop={isPreview}
        autoPlay={isPreview}
        playsInline={isPreview}
        controls={!isPreview}
        onClick={onClick}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default MediaRenderer;
