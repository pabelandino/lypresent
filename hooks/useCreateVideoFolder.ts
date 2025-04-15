// hooks/useCreateVideoFolder.ts
import RNFS from 'react-native-fs';

const VIDEO_FOLDER_PATH = `${RNFS.DocumentDirectoryPath}/lypresents-videos`;

export const useCreateVideoFolder = () => {
  const ensureVideoFolderExists = async () => {
    const exists = await RNFS.exists(VIDEO_FOLDER_PATH);
    if (!exists) {
      await RNFS.mkdir(VIDEO_FOLDER_PATH);
    }
  };

  return { folderPath: VIDEO_FOLDER_PATH, ensureVideoFolderExists };
};
