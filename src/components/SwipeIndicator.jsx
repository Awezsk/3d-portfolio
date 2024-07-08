import React from 'react';

const SwipeIndicator = () => {
  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center">
      <div className="animate-bounce mb-2">
        &#8592; &#8594;
      </div>
      <p className="text-sm font-semibold">Swipe to Explore</p>
    </div>
  );
};

export default SwipeIndicator;