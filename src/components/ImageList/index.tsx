import { Image } from "./Image";

export interface image {
  imageUrl: string;
  title: string;
  thumbnail?: string;
}

interface ImageListProps {
  images: image[];
}

export const ImageList = ({ images }: ImageListProps) => {
  const columnWidth = 300;
  const columnGutter = 20;

  return (
    <div className="w-full">
      <div>123</div>
    </div>
  );
};
