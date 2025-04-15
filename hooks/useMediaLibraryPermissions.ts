import * as ImagePicker from 'expo-image-picker';

export const useMediaLibraryPermissions = () => {
  const requestPermission = async (): Promise<boolean> => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return granted;
  };

  return { requestPermission };
};
