import React from 'react';
import styles from '../style/mystyle.module.css';

const rows = [
  { images: [0, 1, 2], direction: 'ltr' },
  { images: [3, 4, 5], direction: 'rtl' },
  { images: [6, 7, 8], direction: 'ltr' },
];

function ProjectAlbum({ photos }) {
  return (
    <div className={styles.albumWrap}>
      {rows.map((row, ri) => (
        <div key={ri} className={styles.albumTrackWrap}>
          <div
            className={`${styles.albumTrack} ${row.direction === 'rtl' ? styles.albumTrackRtl : ''}`}
          >
            <div className={styles.albumTrackInner}>
              {row.images.map((pi, i) => (
                <div key={i} className={styles.albumItem}>
                  <div className={styles.albumItemInner}>
                    <img src={photos[pi].src} alt={`Project ${pi + 1}`} className={styles.albumImg} />
                    <div className={styles.albumOverlay}>
                      <span className={styles.albumOverlayIcon}>+</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.albumTrackInner}>
              {row.images.map((pi, i) => (
                <div key={i} className={styles.albumItem}>
                  <div className={styles.albumItemInner}>
                    <img src={photos[pi].src} alt={`Project ${pi + 1}`} className={styles.albumImg} />
                    <div className={styles.albumOverlay}>
                      <span className={styles.albumOverlayIcon}>+</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectAlbum;
