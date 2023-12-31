import React, { useState } from 'react';

function Slider({ min = 0, max = 100, initialValue }) {

  return (
    <div className="w-full max-w-6xl mx-auto">
      <input
        type="range"
        min={min}
        max={max}
        value={initialValue}
        // onChange={e => setValue(e.target.value)}
        className="w-full h-4 appearance-none focus:outline-none focus:ring-0 slider-thumb"
        style={{
          background: `linear-gradient(to right, rgba(250, 7, 21, 0.7), rgba(22, 199, 130, 0.7))`
        }}
        disabled  // Add this attribute to disable the slider thumb
      />
    </div>
  );
}

export default Slider;