import { NodeType } from '@modules/editor/providers/EditorProvider/types';

export type EditorNodesProps = {
  nodes: NodeType[];
  selectedNodes: NodeType['id'][];
  selectNode: (id: NodeType['id']) => void;
  unselectNode: (id: NodeType['id']) => void;
  updateNode?: (id: string, newValues: Partial<Exclude<NodeType, 'id'>>) => void;
};
