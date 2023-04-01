import type { image } from ".";

interface props extends image {
  width: number;
}

export const Image = ({ imageUrl, title, thumbnail, width }: props) => {
  return (
    <>
      <div className="group relative h-auto min-h-[20px] w-full cursor-pointer rounded-lg bg-base-200 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover object-center"
        />
      </div>
    </>
  );
};
