import React from 'react';
import './styles.scss';
import { changeColorTone } from '@/utils';

const Item = ({ value }: { value: number }) => {
  const toneColor = changeColorTone('#052127', value);

  const style = {
    background: toneColor,
    border: `1px solid ${toneColor}`,
  };

  return (
    <div className="item" style={style}>
      {value}
    </div>
  );
};

export default Item;
