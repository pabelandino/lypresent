export interface ImageStoreType {
  imageLocation: string[];
  setImageLocation: (imageLocation: string) => void;
  removeImageLocation: (imageLocation: string) => void;
}
