export interface cardProps {
  title: string;
  description: string;
  type: string;
  url: string;
  tags?: string[];
}

export const Card = ({ title, description, type, url, tags }: cardProps) => {
  return (
    <div className="mb-6 md:mb-0 text-left relative card hover:shadow-lg transition-shadow tbc">
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
        <div className="w-full h-12 mb-2">
          <p className="text-zinc-500 dark:text-zinc-300 line-clamp-2 w-full my-auto">
            {description}
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap mb-6 overflow-hidden gap-2">
          {Array.isArray(tags) &&
            tags?.length > 0 &&
            tags.map((item) => {
              return (
                <div className="text-xs capitalize text-zinc-50 px-3 py-1 rounded-full bg-primary">
                  {item}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
