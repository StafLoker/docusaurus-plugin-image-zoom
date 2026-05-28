import IdealImage from '@theme/IdealImage';
import ZoomBase from '../../internal/ZoomBase';

export default function ImageZoomIdeal({ img, alt, showCaption, captionAlign }) {
  const fullSrc = img.src?.images?.at(-1)?.path ?? img.preSrc;
  return <ZoomBase thumbnail={<IdealImage img={img} alt={alt} />} fullSrc={fullSrc} alt={alt} showCaption={showCaption} captionAlign={captionAlign} />;
}
