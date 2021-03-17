import React, { useEffect, useState } from 'react';
import { Line } from 'react-konva';

import { LinesProps } from './types';

export const blockSnapSize = 50;
const padding = blockSnapSize;

type Lines = {
  points: number[];
  stroke: string;
  strokeWidth: number;
};

export const LinesX: React.FC<LinesProps> = ({ width, height }) => {
  const [lines, setLines] = useState<Lines[]>([]);

  useEffect(() => {
    setLines([]);
    for (let i = 0; i < width / padding; i++) {
      setLines((prev) => {
        const arr = prev.slice();

        arr.push({
          points: [Math.round(i * padding) + 0.5, 0, Math.round(i * padding) + 0.5, height],
          stroke: '#ddd',
          strokeWidth: 1,
        });

        return arr;
      });
    }
  }, [height, width]);

  return (
    <>
      {lines.map((line) => (
        <Line key={JSON.stringify(line)} {...line} />
      ))}
    </>
  );
};

export const LinesY: React.FC<LinesProps> = ({ width, height }) => {
  const [lines, setLines] = useState<Lines[]>([]);

  useEffect(() => {
    setLines([]);
    for (let i = 0; i < height / padding; i++) {
      setLines((prev) => {
        const arr = prev.slice();

        arr.push({
          points: [0, Math.round(i * padding), width, Math.round(i * padding)],
          stroke: '#ddd',
          strokeWidth: 1,
        });

        return arr;
      });
    }
  }, [height, width]);

  return (
    <>
      {lines.map((line) => (
        <Line key={JSON.stringify(line)} {...line} />
      ))}
    </>
  );
};
