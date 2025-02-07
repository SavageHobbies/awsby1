"use client";

import { ParallaxProvider } from 'react-scroll-parallax';

interface Props {
  children: React.ReactNode;
}

const ParallaxWrapper = ({ children }: Props) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
};

export default ParallaxWrapper;