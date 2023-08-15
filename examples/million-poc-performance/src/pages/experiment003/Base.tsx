import React, { useState } from 'react';
import { generateRandomArrayString } from '@/utils';

import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';

const ARRAY_LENGTH = 1000;

/**
 * This example is the same as src/pages/experiment001 but in this case we are
 * using a string array instead of a number array, to check if the performance
 * is the same
 */
const Base = () => {
  const [array, setArray] = useState(generateRandomArrayString(ARRAY_LENGTH));
  useRequestAnimationFrame(() => setArray(generateRandomArrayString(ARRAY_LENGTH)));

  return (
    <div className="playground-003">
      {array.map((value) => (
        <div key={value}>{value.substring(0, 2)}</div>
      ))}
    </div>
  );
};

export default Base;
