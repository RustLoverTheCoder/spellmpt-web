import { useState } from "react";
import type { image } from ".";

interface props extends image {
  width: number;
}

export const Image = ({ imageUrl, title, thumbnail, width }: props) => {
  const [isLoad, setIsLoad] = useState(false);
  return (
    <>
      <div
        className="group relative h-auto w-full cursor-pointer rounded-lg bg-base-200 overflow-hidden"
        style={isLoad ? { minHeight: width } : {}}
      >
        <img
          src={imageUrl}
          alt={title}
          className="object-cover object-center"
          onLoad={() => setIsLoad(true)}
        />
      </div>
    </>
  );
};
