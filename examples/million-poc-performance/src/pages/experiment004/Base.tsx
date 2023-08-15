import React, { useState } from 'react';
import './styles.css';
import useRequestAnimationFrame from '@/hooks/useRequestAnimationFrame';
import { TreeNodeProps, generateTree, shuffle } from '@/utils';
import TreeNode from '@/components/TreeNode/TreeNode';

const Tree = () => {
  const [tree, setTree] = useState(generateTree(10));

  useRequestAnimationFrame(() => setTree(shuffle(tree)));

  return (
    <div className="tree-container">
      {[tree].map((rootNode) => (
        <TreeNode key={rootNode.id} node={rootNode as TreeNodeProps} />
      ))}
    </div>
  );
};

export default Tree;
