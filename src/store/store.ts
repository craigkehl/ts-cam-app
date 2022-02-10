import { useState, useEffect } from 'react';

export interface GlobalState {
  [x: string]: any | undefined;
}

export interface Actions {
  [key: string]: (curState: GlobalState, payload: any) => any;
}

let globalState: GlobalState = {};
let listeners: React.Dispatch<React.SetStateAction<GlobalState>>[] = [];
let actions: Actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier: string, payload: any) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions: Actions, initialState: GlobalState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
