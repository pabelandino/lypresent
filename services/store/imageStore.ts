import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ImageStoreType } from '@/services/store/imageStoreType';
import { zustandImageStorage } from '@/services/store/persist-store-setting';

const useImageStore = create<ImageStoreType>()(
  persist(
    set => ({
      imageLocation: [],
      setImageLocation: (imageLocation: string) =>
        set(state => ({
          imageLocation: [...state.imageLocation, imageLocation],
        })),
      removeImageLocation: (imageLocation: string) =>
        set(state => ({
          imageLocation: state.imageLocation.filter(
            location => location !== imageLocation,
          ),
        })),
    }),
    {
      name: 'image-storage',
      storage: createJSONStorage(() => zustandImageStorage),
    },
  ),
);

export default useImageStore;
