import React from 'react';

const Banner: React.FC = () => {
  return (
   <div>
    <picture>
        <source media="(max-width: 1024px)" srcSet="/assets/jpg/Banner-mobile.jpg" />
        <source media="(min-width: 1024px)" srcSet="/assets/jpg/Banner-desktop.jpg" />
        <img src="/assets/jpg/Banner-desktop.jpg" alt="Banner" />
      </picture>
   </div>
  );
};

export default Banner;
