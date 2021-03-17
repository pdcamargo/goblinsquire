import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';

import { LinesX, LinesY } from '../Grid';
import Sidebar from '../Sidebar';
import EditorLayout, { EditorLayoutItem } from '../EditorLayout';
import EditorNodes from '../EditorNodes';

import EditorProvider, { useEditor } from '@modules/editor/providers/EditorProvider';
import DiceProvider from '@providers/DiceProvider';

const EditorComponent = () => {
  const [ref, setRef] = useState<HTMLDivElement>();
  const { nodes, selectedNodes, dispatch } = useEditor();

  const checkDeselect = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const isDestinationOut = e.target?.attrs?.globalCompositeOperation === 'destination-out';

    const clickedOnEmpty = e.target === e.target.getStage() || isDestinationOut;
    if (clickedOnEmpty) {
      dispatch({
        type: 'clearSelectedNodes',
        payload: null,
      });
    }
  };

  return (
    <EditorLayout>
      <EditorLayoutItem area="content">
        <Box flex="1 1 auto" height="100vh" ref={setRef}>
          <Stage
            width={ref?.offsetWidth}
            height={ref?.offsetHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >
            <Layer>
              <LinesX width={ref?.offsetWidth} height={ref?.offsetHeight} />
              <LinesY width={ref?.offsetWidth} height={ref?.offsetHeight} />
            </Layer>

            <Layer>
              {true && <Rect fill="black" width={ref?.offsetWidth} height={ref?.offsetHeight} />}

              <EditorNodes
                nodes={nodes}
                updateNode={(id, newValues) => {
                  dispatch({
                    type: 'update',
                    payload: {
                      id,
                      newValues,
                    },
                  });
                }}
                selectedNodes={selectedNodes}
                selectNode={(id) => {
                  dispatch({
                    type: 'selectNode',
                    payload: id,
                  });
                }}
                unselectNode={(id) => {
                  dispatch({
                    type: 'unselectNode',
                    payload: id,
                  });
                }}
              />
            </Layer>
          </Stage>
        </Box>
      </EditorLayoutItem>
      <EditorLayoutItem area="sidebar">
        <Sidebar />
      </EditorLayoutItem>

      <Box position="fixed" left="15px" top="15px" bgColor="gray.700" boxShadow="dark-lg" p="5" borderRadius="lg">
        <Button
          onClick={() => {
            dispatch({
              type: 'add',
              payload: {
                id: Math.random().toString().replace('0.', ''),
                type: 'rectangle',
                name: `Rectangle ${nodes.length + 1}`,
                config: {
                  x: 150,
                  y: 150,
                  rotation: 0,
                  fill: 'red',
                  height: 50,
                  width: 50,
                },
              },
            });
          }}
        >
          + Node
        </Button>
      </Box>
    </EditorLayout>
  );
};

const Editor: React.FC = () => {
  return (
    <DiceProvider>
      <EditorProvider>
        <EditorComponent />
      </EditorProvider>
    </DiceProvider>
  );
};

export default Editor;
