import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandVideoStorage } from '@/services/store/persist-store-setting';
import { VideoStoreType } from '@/services/store/videoStoreType';

const useVideoStore = create<VideoStoreType>()(
  persist(
    set => ({
      videoLocation: [],
      setVideoLocation: video =>
        set(state => ({
          videoLocation: [...state.videoLocation, video],
        })),
      removeVideoLocation: videoPath =>
        set(state => ({
          videoLocation: state.videoLocation.filter(v => v !== videoPath),
        })),
    }),
    {
      name: 'video-storage',
      storage: createJSONStorage(() => zustandVideoStorage),
    },
  ),
);

export default useVideoStore;
