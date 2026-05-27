import ZoomBase from '../../internal/ZoomBase';

export default function ImageZoom({ src, alt }) {
  return <ZoomBase thumbnail={<img src={src} alt={alt} />} fullSrc={src} alt={alt} />;
}
