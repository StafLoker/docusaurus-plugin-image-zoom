import ZoomBase from '../../internal/ZoomBase';

export default function ImageZoom({ src, alt, showCaption, captionAlign }) {
  return <ZoomBase thumbnail={<img src={src} alt={alt} />} fullSrc={src} alt={alt} showCaption={showCaption} captionAlign={captionAlign} />;
}
