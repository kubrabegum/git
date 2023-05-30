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
      <p>You can drag and move this content using touch gestures.</p>
    </div>
  );
};

export default MyComponent;
