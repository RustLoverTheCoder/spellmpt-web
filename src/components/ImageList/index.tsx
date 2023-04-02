import { Masonry } from "masonic";
import { useMemo } from "react";

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
  const renderImage = ({
    index,
    data,
    width,
  }: {
    index: number;
    data: image;
    width: number;
  }) => {
    return <Image key={index} {...data} width={width} />;
  };

  return (
    <>
      <Masonry
        items={images}
        columnWidth={columnWidth}
        columnGutter={columnGutter}
        render={renderImage}
      />
    </>
  );
};
