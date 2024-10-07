import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.css'; // Optional: For custom styling

const Cursor = () => {
  const followerRef = useRef(null); // Reference to the follower element

  useEffect(() => {
    const follower = followerRef.current;

    // Mouse move event listener
    const handleMouseMove = (event) => {
      // GSAP animation to move the follower element smoothly
      gsap.to(follower, {
        x: event.x,
        y: event.y,
        duration: 1, // Smoothness of the movement
        ease: "power2.out",
      });
    };

    // Attach the event listener to the document
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="cursor-follower" ref={followerRef}></div>;
};

export default Cursor;
