import { Box, Flex, Text } from '@chakra-ui/react';
import { useEditor } from '@modules/editor/providers/EditorProvider';

const SidebarNodes: React.FC = () => {
  const { nodes } = useEditor();

  return (
    <Box>
      {nodes.map((node) => (
        <Flex key={node.id} alignItems="center">
          <Text>{node.name}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default SidebarNodes;
