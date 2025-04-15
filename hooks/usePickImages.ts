import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

interface Image {
  width?: number;
  height?: number;
  path?: string;
  filename?: string;
}
export const usePickImages = () => {
  const [imageUrl, setImageUrl] = useState<Image[] | null>(null);

  const pickImages = () => {
    ImagePicker.openPicker({
      cropping: false,
      multiple: true,
      mediaType: 'photo',
    })
      .then(images => {
        setImageUrl(images);
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };

  return { imageUrl, pickImages };
};
