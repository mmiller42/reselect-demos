import React from 'react';

/**
 * @typedef {{ key: string, name: string, [children]: Array.<Node> }} Node
 * Renders a list of nodes, recursively.
 * @param {object} props
 * @param {Array.<Node>} props.nodes The items to populate the list with.
 * @param {string|function({ children: string })} props.nameComponent A component to wrap the node name in.
 * @returns {Element}
 */
const NestedList = ({ nodes, nameComponent = 'span' }) => (
  <ul>
    {nodes.map(node => (
      <li key={node.key}>
        <Node node={node} nameComponent={nameComponent} />
      </li>
    ))}
  </ul>
);

const Node = ({ node, nameComponent }) => {
  const NodeComponent = node.children ? BranchNode : EndNode;
  return (
    <NodeComponent node={node} nameComponent={nameComponent} />
  );
};

const BranchNode = ({ node, nameComponent: NameComponent }) => (
  <div>
    <NameComponent>{node.name}</NameComponent>
    {node.children.length > 0 && (
      <NestedList nodes={node.children} nameComponent={NameComponent} />
    )}
  </div>
);

export const EndNode = ({ node, nameComponent: NameComponent }) => (
  <NameComponent>{node.name}</NameComponent>
);

export default NestedList;
