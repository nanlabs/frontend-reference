import React, { useState } from 'react';
import Item from '@/components/Item';
import { generateRandomArray } from '@/utils';

import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';
import { For, block } from 'million/react';

const ARRAY_LENGTH = 1000;

/**
 * This is the same as src/pages/experiment001/Million001.tsx
 * the idea here is to compare the performance using block in root level and
 * <For /> without item block
 */

const Million002 = block(() => {
  const [array, setArray] = useState(generateRandomArray(ARRAY_LENGTH));
  useRequestAnimationFrame(() => setArray(generateRandomArray(ARRAY_LENGTH)));

  return (
    <div className="playground">
      <For each={array}>{(value) => <Item key={value} value={value} />}</For>
    </div>
  );
});

export default Million002;
