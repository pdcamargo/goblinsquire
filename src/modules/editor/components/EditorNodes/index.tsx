import React from 'react';
import { Circle } from 'react-konva';

import { EditorNodesProps } from './types';

import Rectangle from '../Shapes/Rectangle';

const EditorNodes: React.FC<EditorNodesProps> = ({ nodes, selectedNodes, updateNode, selectNode, unselectNode }) => {
  return (
    <>
      {nodes?.map(({ id, type, name, ...rect }) => (
        <Circle
          key={id}
          globalCompositeOperation="destination-out"
          radius={1}
          width={rect.config.width * 4}
          height={rect.config.height * 4}
          fill="red"
          x={rect.config.x + rect.config.width / 2}
          y={rect.config.y + rect.config.height / 2}
        />
      ))}
      {nodes?.map((node) => (
        <Rectangle
          key={node.id}
          isSelected={selectedNodes.includes(node.id)}
          node={node}
          onChange={({ id, ...node }) => updateNode(id, node)}
          onSelect={() => {
            const isSelected = selectedNodes.includes(node.id);

            if (isSelected) {
              unselectNode(node.id);
              return;
            }

            selectNode(node.id);
          }}
        />
      ))}
    </>
  );
};

export default EditorNodes;
