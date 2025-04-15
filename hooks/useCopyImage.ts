import RNFS from 'react-native-fs';

import { useCreateImageFolder } from './useCreateImageFolder';

export const useImageCopy = () => {
  const { folderPath, ensureFolderExists } = useCreateImageFolder();

  const copyToFolder = async (
    uri: string,
    fileName?: string,
  ): Promise<string | null> => {
    await ensureFolderExists();

    const path = uri.replace('file://', '');
    const exists = await RNFS.exists(path);
    if (!exists) return null;

    const extension = path.split('.').pop() || 'jpg';
    const base = fileName?.split('.')[0] || `image_${Date.now()}`;
    const finalName = `${base}_${Date.now()}.${extension}`;
    const destPath = `${folderPath}/${finalName}`;

    await RNFS.copyFile(path, destPath);
    return destPath;
  };

  return { copyToFolder };
};
