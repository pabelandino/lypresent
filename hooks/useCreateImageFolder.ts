import RNFS from 'react-native-fs';

const IMAGES_FOLDER_PATH = `${RNFS.DocumentDirectoryPath}/lypresents-images`;

export const useCreateImageFolder = () => {
  const ensureFolderExists = async () => {
    const exists = await RNFS.exists(IMAGES_FOLDER_PATH);
    if (!exists) {
      await RNFS.mkdir(IMAGES_FOLDER_PATH);
    }
  };

  return { folderPath: IMAGES_FOLDER_PATH, ensureFolderExists };
};
