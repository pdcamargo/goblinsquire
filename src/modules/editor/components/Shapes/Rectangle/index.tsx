import React from 'react';
import { Rect, Transformer } from 'react-konva';
import Konva from 'konva';

import { NodeType } from '@modules/editor/providers/EditorProvider/types';
import { blockSnapSize } from '../../Grid';

type RectangleProps = {
  node: NodeType;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newNode: NodeType) => void;
};

const Rectangle: React.FC<RectangleProps> = ({ node: nodeConfig, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef<Konva.Rect>();
  const trRef = React.useRef<Konva.Transformer>();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current?.nodes([shapeRef.current]);
      trRef.current?.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...nodeConfig.config}
        draggable
        onDragStart={() => {
          if (!isSelected) {
            onSelect();
          }
        }}
        onDragEnd={(e) => {
          onChange({
            ...nodeConfig,
            config: {
              ...nodeConfig.config,
              x: Math.round(e.target.x() / blockSnapSize) * blockSnapSize,
              y: Math.round(e.target.y() / blockSnapSize) * blockSnapSize,
            },
          });
        }}
        onTransformEnd={() => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...nodeConfig,
            config: {
              ...nodeConfig.config,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
              rotation: node.rotation(),
            },
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          centeredScaling={false}
          rotationSnaps={[0, 90, 180, 270]}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Rectangle;
