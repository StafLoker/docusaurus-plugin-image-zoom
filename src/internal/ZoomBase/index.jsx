import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const ZOOM_IN   = 1.08;
const ZOOM_OUT  = 1 / ZOOM_IN;
const SCALE_MIN = 1;
const SCALE_MAX = 8;

export default function ZoomBase({ thumbnail, fullSrc, alt, showCaption = true, captionAlign = 'center' }) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const overlayRef = useRef(null);
  const drag = useRef(null);
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const closeRef = useRef(null);

  useEffect(() => { scaleRef.current = scale; }, [scale]);
  useEffect(() => { offsetRef.current = offset; }, [offset]);

  useEffect(() => {
    if (!open) return;

    const el = overlayRef.current;
    const close = () => { setOpen(false); setScale(1); setOffset({ x: 0, y: 0 }); };
    closeRef.current = close;

    const onWheel = (e) => {
      e.preventDefault();

      const rect = el.getBoundingClientRect();
      const cx = e.clientX - (rect.left + rect.width / 2);
      const cy = e.clientY - (rect.top + rect.height / 2);

      const next = Math.max(SCALE_MIN, Math.min(SCALE_MAX, scaleRef.current * (e.deltaY < 0 ? ZOOM_IN : ZOOM_OUT)));
      const ratio = next / scaleRef.current;
      const o = offsetRef.current;

      setScale(next);
      setOffset({
        x: cx - ratio * (cx - o.x),
        y: cy - ratio * (cy - o.y),
      });
    };

    const onKey = (e) => { if (e.key === 'Escape') close(); };

    el.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('keydown', onKey);

    return () => {
      el.removeEventListener('wheel', onWheel);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className={styles.thumbnailContainer} onClick={() => setOpen(true)}>
        <div className={styles.thumbnail}>
          {thumbnail}
        </div>
        {showCaption && alt && (
          <p className={styles.caption} style={{ textAlign: captionAlign }}>{alt}</p>
        )}
      </div>

      {open && (
        <div
          ref={overlayRef}
          className={styles.overlay}
          onClick={() => closeRef.current?.()}
          onMouseMove={(e) => { if (drag.current) setOffset({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y }); }}
          onMouseUp={() => { drag.current = null; }}
          onMouseLeave={() => { drag.current = null; }}
        >
          <img
            src={fullSrc}
            alt={alt}
            className={styles.fullImage}
            style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`, cursor: scale > 1 ? 'grab' : 'zoom-out' }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => { e.preventDefault(); drag.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }; }}
          />
        </div>
      )}
    </>
  );
}
