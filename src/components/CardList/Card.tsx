export interface cardProps {
  title: string;
  description: string;
  type: string;
  url: string;
}

export const Card = ({ title, description, type, url }: cardProps) => {
  return (
    <div className="mb-6 md:mb-0 text-left relative card hover:shadow-lg transition-shadow tbc">
      <a className="absolute top-0 left-0 w-full h-full z-30" href={url} />
      <div className="relative z-40 pointer-events-none p-6 pb-0 md:pb-0">
        <div className="flex items-center justify-between mb-3">
          <div></div>
          <div className="text-xs capitalize text-zinc-50 px-3 py-1 rounded-full bg-primary">
            {type}
          </div>
        </div>
        <h3 className="mt-0 text-2xl mb-1">
          <a
            className="font-bold text-zinc-900 pointer-events-auto dark:text-white"
            href={url}
          >
            {title}
          </a>
        </h3>
        <p className="truncate text-zinc-500 dark:text-zinc-300 mb-6">
          {description}
        </p>
      </div>
    </div>
  );
};
