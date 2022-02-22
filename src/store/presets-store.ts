import { initStore } from './store';

import { GlobalState } from './store';

export interface PresetState {
  isCurrent: boolean;
  id: number;
  name: string;
  isShow: boolean;
}

const configureStore = () => {
  const actions = {
    TOGGLE_SHOW: (curState: GlobalState, presetId: number) => {
      const presetIndex: number = curState.presets.findIndex(
        (p: PresetState) => p.id === presetId
      );
      const newShowStatus = !curState.presets[presetIndex].isShow;
      const updatedPresets = [...curState.presets];
      updatedPresets[presetIndex] = {
        ...curState.presets[presetIndex],
        isShow: newShowStatus,
      };
      return { presets: updatedPresets };
    },
    CURRENT_PRESET: (curState: GlobalState, presetId: number) => {
      const updatedPresets = curState.presets.map(
        (p: PresetState): PresetState => {
          p.isCurrent = presetId === p.id ? true : false;
          console.log(p);
          return p;
        }
      );
      return { presets: updatedPresets };
    },
  };

  initStore(actions, {
    presets: [
      {
        id: 0,
        name: 'All Stage',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 1,
        name: 'Low Podium',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 2,
        name: 'Med Podium',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 3,
        name: 'Wide Podium',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 4,
        name: 'Very Wide',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 5,
        name: 'Center Stage',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 6,
        name: 'Audience',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 7,
        name: 'Conductor',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 8,
        name: 'Piano',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 9,
        name: 'Organ',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 10,
        name: 'Left Stage',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 11,
        name: 'Right Stage',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 12,
        name: 'Right Wide',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 13,
        name: 'Left Low',
        isShow: true,
        isCurrent: false,
      },
      {
        id: 14,
        name: 'Right Low',
        isShow: true,
        isCurrent: false,
      },
    ],
  });
};

export default configureStore;