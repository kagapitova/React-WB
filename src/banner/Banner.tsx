import React from 'react';
import styles from './Banner.module.css';

const Banner: React.FC = () => {
  return (
   <div>
    <img src="/assets/jpg/Banner-desktop.jpg" alt="Banner" className={styles.banner} />
   </div>
  );
};

export default Banner;
