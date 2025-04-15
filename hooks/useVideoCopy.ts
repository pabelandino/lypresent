import RNFS from 'react-native-fs';

import { useCreateVideoFolder } from '@/hooks/useCreateVideoFolder';

export const useVideoCopy = () => {
  const { folderPath, ensureVideoFolderExists } = useCreateVideoFolder();

  const copyToFolder = async (
    uri: string,
    fileName?: string,
  ): Promise<string | null> => {
    await ensureVideoFolderExists();

    const path = uri.replace('file://', '');
    const exists = await RNFS.exists(path);
    if (!exists) return null;

    const extension = path.split('.').pop() || 'mp4';
    const base = fileName?.split('.')[0] || `video_${Date.now()}`;
    const finalName = `${base}_${Date.now()}.${extension}`;
    const destPath = `${folderPath}/${finalName}`;

    await RNFS.copyFile(path, destPath);
    return destPath;
  };

  return { copyToFolder };
};
