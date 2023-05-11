import React, { useRef, useEffect } from 'react';
import { SlArrowDownCircle } from 'react-icons/sl';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const Banner = (): JSX.Element => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateString();
  }, []);

  function animateString() {
    // create character level splits - variables not reused
    let _ = new SplitType(titleRef.current);
    let __ = new SplitType(subtitleRef.current);

    let characters = document.querySelectorAll('.char');

    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add('translate-y-full');
    }

    gsap.to(characters, {
      duration: 1,
      ease: 'power4.out',
      stagger: 0.05,
      translateY: '0%',
      delay: 0.5
    });
  }

  function handleClick() {
    const element = document.getElementById('navRef');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  return (
    <div className="hidden md:flex flex-col justify-center items-center text-center w-full h-screen bg-banner bg-cover">
      <div className="w-2/3 p-1 backdrop-blur-lg">
        <h1
          id="banner-title"
          ref={titleRef}
          className="text-8xl lg:text-9xl mb-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          AGSF{' '}
        </h1>
        <div id="banner-subtitle" ref={subtitleRef} className="text-5xl">
          <span
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            Développement web pour
          </span>
          <span
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            {' '}
            PME et indépendants
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 mb-10">
        <div className="text-3xl flex flex-col justify-center items-center cursor-pointer">
          Continuer
          <SlArrowDownCircle
            onClick={handleClick}
            className="text-5xl animate-bounce mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
