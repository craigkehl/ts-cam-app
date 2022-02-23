import { initStore, GlobalState } from './store';

export interface SceneState {
  name: string;
  isShow: boolean;
  description: string;
}

const configureStore = () => {
  const actions = {
    TOGGLE_SHOW: (curState: GlobalState, name: string) => {
      const sceneIndex: number = curState.scenes.findIndex(
        (s: SceneState) => s.name === name
      );
      const newShowStaus = !curState.scenes[sceneIndex].isShow;
      const updatedScenes = [...curState.scenes];
      updatedScenes[sceneIndex] = {
        ...curState.scenes[sceneIndex],
        isShow: newShowStaus,
      };
      return { scenes: updatedScenes };
    },
    ADD_SCENE: (
      curState: GlobalState,
      name: string,
      description: string,
      isShow: boolean
    ) => {
      const newScene = { name, description, isShow };
      curState.scenes.push(newScene);
    },
  };

  initStore(actions, {
    scenes: [
      {
        name: 'Live',
        isShow: true,
        description: 'Live camera feed',
      },
      {
        name: 'sacramentPic',
        isShow: true,
        description: 'Picture of Christ with Sacrament background music',
      },
      {
        name: 'sacramentVideo',
        isShow: true,
        description: "Video of Christ's Atonement",
      },
    ],
  });
};

export default configureStore;
