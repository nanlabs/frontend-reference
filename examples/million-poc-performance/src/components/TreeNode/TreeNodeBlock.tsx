import React from 'react';
import './styles.css';
import { TreeNodeProps } from '@/utils';
import { block, For } from 'million/react';

// we need to define a block in this level, because we're using recursive component
// so, if we define a new component as `const TreeNodeBlock = block(TreeNode)`
// the recursive definition not take a block
const TreeNodeBlock = block(({ node }: { node: TreeNodeProps }) => {
  return (
    <div className="tree-node">
      <div className="tree-name">{node.name}</div>
      <div className="tree-children">
        <For each={node.children}>{(childNode, i) => <TreeNodeBlock key={i} node={childNode} />}</For>
      </div>
    </div>
  );
});

export default TreeNodeBlock;
