import React from 'react'
import { useState } from 'react';

const Fun = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
        <button
      style={{
        backgroundColor: isHovered ? 'darkblue' : 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover over me
    </button>
    </>
  )
}

export default Fun