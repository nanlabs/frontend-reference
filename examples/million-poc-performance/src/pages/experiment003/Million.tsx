import React, { useState } from 'react';
import { block, For } from 'million/react';
import { generateRandomArrayString } from '@/utils';

import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';

const ARRAY_LENGTH = 1000;

/**
 * This example is the same as src/pages/experiment001 but in this case we are
 * using a string array instead of a number array, to check if the performance
 * is the same
 */
const Million = block(() => {
  const [array, setArray] = useState(generateRandomArrayString(ARRAY_LENGTH));
  useRequestAnimationFrame(() => setArray(generateRandomArrayString(ARRAY_LENGTH)));

  return (
    <div className="playground-003">
      <For each={array}>{(value) => <div key={value}>{value.substring(0, 2)}</div>}</For>
    </div>
  );
});

export default Million;
