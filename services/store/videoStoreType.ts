export interface VideoItem {
  videoPath: string;
  thumbnailPath: string;
}

export interface VideoStoreType {
  videoLocation: VideoItem[];
  setVideoLocation: (item: VideoItem) => void;
  removeVideoLocation: (item: VideoItem) => void;
}
