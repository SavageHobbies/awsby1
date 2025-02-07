"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import './puzzle-animations.css';
import { FaArrowRight } from 'react-icons/fa';

type PuzzlePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';

interface PuzzlePieceProps {
  position: PuzzlePosition;
  rotation?: number;
  initialX?: number;
  initialY?: number;
  delay?: number;
  finalX?: number;
  finalY?: number;
  converge?: boolean;
}

const PuzzlePiece = ({
  position,
  rotation = 0,
  initialX = 0,
  initialY = 0,
  delay = 0,
  finalX = 0,
  finalY = 0,
  converge = false
}: PuzzlePieceProps) => {
  const [isAssembled, setIsAssembled] = useState(false);

  // SVG paths for each puzzle piece type
  const piecePaths = {
    'top-left': "M 25,0 L 75,0 C 75,0 87.5,0 87.5,12.5 C 87.5,25 100,25 100,37.5 V 62.5 C 100,75 87.5,75 87.5,87.5 C 87.5,100 75,100 75,100 H 25 C 12.5,100 0,87.5 0,75 V 25 C 0,12.5 12.5,0 25,0 Z",
    'top-right': "M 0,37.5 V 62.5 C 0,75 12.5,75 12.5,87.5 C 12.5,100 25,100 25,100 H 75 C 87.5,100 100,87.5 100,75 V 25 C 100,12.5 87.5,0 75,0 H 25 C 12.5,0 0,12.5 0,25 Z",
    'bottom-left': "M 25,0 H 75 C 87.5,0 100,12.5 100,25 V 75 C 100,87.5 87.5,100 75,100 H 25 C 12.5,100 0,87.5 0,75 V 25 C 0,12.5 12.5,0 25,0 Z",
    'bottom-right': "M 0,25 V 75 C 0,87.5 12.5,100 25,100 H 75 C 87.5,100 100,87.5 100,75 V 25 C 100,12.5 87.5,0 75,0 H 25 C 12.5,0 0,12.5 0,25 Z",
    'center': "M 25,0 H 75 C 87.5,0 100,12.5 100,25 V 75 C 100,87.5 87.5,100 75,100 H 25 C 12.5,100 0,87.5 0,75 V 25 C 0,12.5 12.5,0 25,0 Z"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, (delay + 1.5) * 1000);

    return () => clearTimeout(timer);
  }, [delay]);
  
  const convergePositions: Record<PuzzlePosition, { x: number; y: number }> = {
    'top-left': { x: -96, y: -96 },
    'top-right': { x: 96, y: -96 },
    'bottom-left': { x: -96, y: 96 },
    'bottom-right': { x: 96, y: 96 },
    'center': { x: 0, y: 0 }
  };
  
  const transitionProps = { duration: 1.5, delay, type: "spring", stiffness: 100, damping: 15 };
  
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        x: initialX,
        y: initialY,
        rotate: rotation
      }}
      animate={{
        opacity: converge ? 0 : 1,
        scale: 1,
        x: converge ? convergePositions[position].x : finalX,
        y: converge ? convergePositions[position].y : finalY,
        rotate: 0
      }}
      transition={transitionProps}
      className={`absolute w-24 h-24 puzzle-piece ${isAssembled ? 'assembled piece-fit' : ''}`}
      data-position={position}
  >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path
          d={piecePaths[position]}
          className={`fill-current ${
            position === 'top-left' ? 'text-blue-400/30' :
            position === 'top-right' ? 'text-purple-400/30' :
            position === 'bottom-left' ? 'text-emerald-400/30' :
            position === 'bottom-right' ? 'text-rose-400/30' :
            'text-amber-400/30' // center piece
          }`}
        />
      </svg>
    </motion.div>
  );
};

interface PuzzlePieceConfig {
  position: PuzzlePosition;
  rotation: number;
  x: number;
  y: number;
  finalX: number;
  finalY: number;
  delay: number;
}

/*
  Arrange puzzle pieces in a side-by-side assembled square.
  The corner pieces form the corners of the square and the center piece is in the middle.
*/
const puzzlePieces: PuzzlePieceConfig[] = [
  { position: 'top-left', rotation: -45, x: -150, y: -150, finalX: -96, finalY: -96, delay: 0 },
  { position: 'top-right', rotation: 45, x: 150, y: -150, finalX: 96, finalY: -96, delay: 0.2 },
  { position: 'bottom-left', rotation: -45, x: -150, y: 150, finalX: -96, finalY: 96, delay: 0.4 },
  { position: 'bottom-right', rotation: 45, x: 150, y: 150, finalX: 96, finalY: 96, delay: 0.6 },
  { position: 'center', rotation: 0, x: 0, y: 0, finalX: 0, finalY: 0, delay: 0.8 }
];

export default function HeroSection(): JSX.Element {
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showAssemblyFlash, setShowAssemblyFlash] = useState(false);
  const [converge, setConverge] = useState(false);

  useEffect(() => {
    // Pieces animate into assembled square (side-by-side) initially
    const assembleTimer = setTimeout(() => {
      // assembled state can be used for connector animations if needed
    }, 2000);

    const flashTimer = setTimeout(() => {
      setShowAssemblyFlash(true);
    }, 2300);

    // Trigger the logo appearance and converge the puzzle pieces towards the center
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
      setConverge(true);
    }, 2800);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3800);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(logoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Puzzle Animation Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          {showAssemblyFlash && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 assembly-flash"
            />
          )}
        </AnimatePresence>

        {/* Puzzle pieces container remains intact; each PuzzlePiece will animate to converge at center if 'converge' is true */}
        <div className="puzzle-container absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Connector Lines */}
          <AnimatePresence>
            {/* (Render connectors if needed; not modified in this version) */}
          </AnimatePresence>

          {puzzlePieces.map((piece) => (
            <PuzzlePiece
              key={`puzzle-${piece.position}`}
              position={piece.position}
              rotation={piece.rotation}
              initialX={piece.x}
              initialY={piece.y}
              finalX={piece.finalX}
              finalY={piece.finalY}
              delay={piece.delay}
              converge={converge}
            />
          ))}
        </div>

        {/* Logo Animation: fades in as pieces converge */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: [1.1, 1] }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="absolute"
            >
              <motion.img
                src="/images/by1_logo_nobg.png"
                alt="BY1.net Logo"
                className="h-80 w-auto logo-glow"
                animate={{
                  opacity: showContent ? 0.2 : 1,
                  scale: showContent ? [1.2, 1] : 1,
                }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 min-h-[80%] flex flex-col items-center justify-center relative z-10 text-center">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8 max-w-4xl mt-0"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-custom float-animation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Not All Businesses Can Afford Perfection—
                <span className="text-gradient-animate">
                  But Everyone Deserves Progress
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-custom float-animation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                BY1.net helps you grow one practical step at a time. Automate what you need, skip what you don't. 
                Save time. Make more. Run smoother.
              </motion.p>
              
              <motion.p
                className="text-xl md:text-2xl font-semibold gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your Growth, Piece by Piece
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="btn-primary btn-glow text-white text-lg px-8 font-semibold flex items-center shadow-md hover:shadow-lg transition duration-300"
                >
                  Build Your First Step →
                </Button>
                <Button
                  size="lg"
                  className="btn-secondary text-white text-lg px-8 font-semibold shadow-md hover:shadow-lg"
                >
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
