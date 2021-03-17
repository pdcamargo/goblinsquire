import immer from 'immer';

import {
  AddPayloadType,
  DeletePayloadType,
  EditorProviderReducerStateType,
  ReducerActionsType,
  ReducerType,
  SelectNodePayloadType,
  UnselectNodePayloadType,
  UpdatePayloadType,
} from './types';

export const initialState: EditorProviderReducerStateType = {
  nodes: [],
  selectedNodes: [],
};

export const reducerActions: ReducerActionsType = {
  add: (state, payload: AddPayloadType) => {
    state.nodes.push(payload);
  },
  delete: (state, payload: DeletePayloadType) => {
    const index = state.nodes.findIndex((n) => n.id === payload);
    state.nodes.splice(index, 1);
  },
  update: (state, payload: UpdatePayloadType) => {
    const index = state.nodes.findIndex((n) => n.id === payload.id);

    state.nodes[index] = {
      ...state.nodes[index],
      ...payload.newValues,
    };
  },
  selectNode: (state, payload: SelectNodePayloadType) => {
    if (state.selectedNodes.includes(payload)) {
      return;
    }

    state.selectedNodes.push(payload);
  },
  unselectNode: (state, payload: UnselectNodePayloadType) => {
    if (!state.selectedNodes.includes(payload)) {
      return;
    }
    const index = state.selectedNodes.findIndex((n) => n === payload);
    state.selectedNodes.splice(index, 1);
  },
  clearSelectedNodes: (state) => {
    state.selectedNodes = [];
  },
};

export const reducer: ReducerType = (state, action) => {
  const fn = reducerActions[action.type];

  if (fn) {
    return immer(state, (draftState) => fn(draftState as any, action.payload));
  }

  console.log('[WARNING] Action without reducer:', action);
  return state;
};
