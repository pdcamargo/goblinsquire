import { Dispatch } from 'react';

import Konva from 'konva';

export type NodeType = {
  id: string;
  name: string;
  type: 'rectangle' | 'circle';
  config: Konva.RectConfig;
};

export type AddPayloadType = NodeType;
export type DeletePayloadType = NodeType['id'];
export type UpdatePayloadType = {
  id: string;
  newValues: Partial<Exclude<NodeType, 'id'>>;
};
export type SelectNodePayloadType = NodeType['id'];
export type UnselectNodePayloadType = NodeType['id'];

type ActionsType = 'add' | 'delete' | 'update' | 'selectNode' | 'unselectNode' | 'clearSelectedNodes';
type PayloadType = NodeType | NodeType['id'] | UpdatePayloadType | SelectNodePayloadType | UnselectNodePayloadType;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReducerActionsType = Record<ActionsType, (state: EditorProviderReducerStateType, payload: any) => void>;

export type ReducerType = (
  state: EditorProviderReducerStateType,
  action: {
    type: ActionsType;
    payload: PayloadType;
  },
) => EditorProviderReducerStateType;

export type EditorProviderReducerStateType = {
  nodes: NodeType[];
  selectedNodes: NodeType['id'][];
};

export type EditorProviderContextType = EditorProviderReducerStateType & {
  dispatch: Dispatch<{
    type: ActionsType;
    payload: PayloadType;
  }>;
};
