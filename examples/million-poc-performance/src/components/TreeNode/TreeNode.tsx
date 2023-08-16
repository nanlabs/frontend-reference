import React from 'react';
import './styles.css';
import { TreeNodeProps } from '@/utils';

const TreeNode = ({ node }: { node: TreeNodeProps }) => {
  return (
    <div className="tree-node">
      <div className="tree-name">{node.name}</div>
      <div className="tree-children">
        {node.children.map((childNode) => (
          <TreeNode key={childNode.id} node={childNode} />
        ))}
      </div>
    </div>
  );
};
export default TreeNode;
