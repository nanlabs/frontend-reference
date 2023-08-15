import React, { useState } from 'react';
import { block } from 'million/react';
import ItemBlock from '@/components/Item/ItemBlock';
import { generateRandomArray } from '@/utils';

import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';

const ARRAY_LENGTH = 1000;

/**
 * This is the same as src/pages/experiment001/Million001.tsx
 * the idea here is to compare the performance using block in root level,
 * array map iteration and ItemBlock
 */

const Million002 = block(() => {
  const [array, setArray] = useState(generateRandomArray(ARRAY_LENGTH));
  useRequestAnimationFrame(() => setArray(generateRandomArray(ARRAY_LENGTH)));

  return (
    <div className="playground">
      {array.map((value) => (
        <ItemBlock key={value} value={value} />
      ))}
    </div>
  );
});

export default Million002;
