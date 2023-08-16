import React, { useState } from 'react';
import './styles.css';
import { For, block } from 'million/react';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';
import { TreeNodeProps, generateTree, shuffle } from '@/utils';
import TreeNodeBlock from '@/components/TreeNode/TreeNodeBlock';

const Tree = block(() => {
  const [tree, setTree] = useState(generateTree(10));
  useRequestAnimationFrame(() => setTree(shuffle(tree)));

  return (
    <div className="tree-container">
      <For each={[tree]}>{(value, i) => <TreeNodeBlock key={i} node={value as TreeNodeProps} />}</For>
    </div>
  );
});

export default Tree;
