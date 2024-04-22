import React from 'react';

const Divider = () => {
  return (
    <svg height="1" width="100%" className="text-gray-300 dark:text-zinc-800">
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        style={{ stroke: 'currentcolor', strokeWidth: 2, strokeDasharray: '12,12' }}
      />
    </svg>
  );
};

export default Divider;
