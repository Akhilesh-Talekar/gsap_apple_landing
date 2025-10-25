import React, {useEffect, useRef } from "react";

const Hero = () => {
    const vidRef = useRef();

    useEffect(() => {
        if(vidRef.current) {
            vidRef.current.playbackRate = 1.5;

        }
    }, []);

  return (
    <section id="hero">
      <div>   
        <h1>MacBook Pro</h1>
        <img src="title.png" alt="MacBook Pro" />
      </div>
      <video ref={vidRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>Buy</button>
      <p>From $1999 or <span> $83.29/mo. for 24 mo. with Apple Card</span></p>
    </section>
  );
};

export default Hero;
