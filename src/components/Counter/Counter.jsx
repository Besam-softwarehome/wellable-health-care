import React, { useEffect, useRef, useState } from "react";
import './Counter.css'

const Counter = ({ start, end, duration, delay, sign, name }) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startValue = start;

    const timeout = setTimeout(() => {
      const increment = (end - start) / (duration / 20);

      const interval = setInterval(() => {
        startValue += increment;

        if (startValue >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 20);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, start, end, duration, delay]);

  return (
    <>
    <div className="counter">
    <h1 ref={ref}>
      {count}{sign}
    </h1>
        <p className="name">{name}</p> 
    </div>
    </>
  );
};

export default Counter;