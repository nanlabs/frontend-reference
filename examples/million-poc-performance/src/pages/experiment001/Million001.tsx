import React, { useState } from 'react';
import { block, For } from 'million/react';
import ItemBlock from '@/components/Item/ItemBlock';
import { generateRandomArray } from '@/utils';

import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';

const ARRAY_LENGTH = 1000;

const Millon001 = block(() => {
  const [array, setArray] = useState(generateRandomArray(ARRAY_LENGTH));
  useRequestAnimationFrame(() => setArray(generateRandomArray(ARRAY_LENGTH)));

  return (
    <div className="playground">
      <For each={array}>{(value) => <ItemBlock key={value} value={value} />}</For>
    </div>
  );
});

export default Millon001;
