import React, { useEffect, useRef } from 'react';
import Hammer from 'hammerjs';

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const hammer = new Hammer(element);
      hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

      let initialPositionX = 0;
      let initialPositionY = 0;
      let currentPositionX = 0;
      let currentPositionY = 0;

      hammer.on('panstart', (event) => {
        initialPositionX = currentPositionX;
        initialPositionY = currentPositionY;
      });

      hammer.on('panmove', (event) => {
        currentPositionX = initialPositionX + event.deltaX;
        currentPositionY = initialPositionY + event.deltaY;

        element.style.transform = `translate(${currentPositionX}px, ${currentPositionY}px)`;
      });

      hammer.on('panend', (event) => {
        initialPositionX = currentPositionX;
        initialPositionY = currentPositionY;
      });
    }

    return () => {
      // Clean up Hammer.js instance if needed
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        width: '200px',
        height: '200px',
        background: 'lightblue',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h2>Draggable Content</h2>
      <img src='data:image/png;base64,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' alt='dragndrop'/>
    </div>
  );
};

export default MyComponent;
