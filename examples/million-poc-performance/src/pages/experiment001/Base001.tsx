import React, { useState } from 'react';
import Item from '@/components/Item';
import { generateRandomArray } from '@/utils';

import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';

const ARRAY_LENGTH = 1000;

const Base001 = () => {
  const [array, setArray] = useState(generateRandomArray(ARRAY_LENGTH));
  useRequestAnimationFrame(() => setArray(generateRandomArray(ARRAY_LENGTH)));

  return (
    <div className="playground">
      {array.map((value) => (
        <Item key={value} value={value} />
      ))}
    </div>
  );
};

export default Base001;
