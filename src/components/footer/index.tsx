export const Footer = () => {
  const list = [
    {
      name: "Company",
      children: [
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Email",
          path: "/email",
        },
      ],
    },
    {
      name: "Social",
      children: [
        {
          name: "Twitter",
          path: "https://twitter.com/spellmpt",
        },
        {
          name: "LinkedIn",
          path: "https://www.linkedin.com/company/spellmpt",
        },
        {
          name: "Discord",
          path: "https://discord.gg/8QZ2Y4Z",
        },
        {
          name: "weibo",
          path: "https://weibo.com/spellmpt",
        },
      ],
    },
    {
      name: "Product",
      children: [
        {
          name: "ChatGPT",
          path: "/chatgpt",
        },
        {
          name: "Midjourney",
          path: "/midjourney",
        },
        {
          name: "Stable Diffusion",
          path: "/stable-diffusion",
        },
        {
          name: "Openjourney",
          path: "/openjourney",
        },
        {
          name: "DALL-E",
          path: "/dalle",
        },
      ],
    },
  ];
  return (
    <footer className="bg-zinc-100 py-8 md:py-20 border-t dark:bg-zinc-900 tbc">
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-4">
          <div className="mb-6 md:mb-0">
            <a className="relative hover:no-underline w-14 flex items-center text-xl font-semibold">
              Spellmpt
            </a>
          </div>
          {list.map((item) => {
            return (
              <div className="mb-4 md:mb-0" key={item.name}>
                <h5 className="text-black font-medium mb-2 dark:text-white">
                  {item.name}
                </h5>
                <ul>
                  {item.children.map((child) => {
                    return (
                      <li key={child.name}>
                        <a
                          className="hover:text-indigo-600 text-zinc-800 transition-colors font-light dark:text-zinc-400 text-sm"
                          target="_blank"
                          rel="noreferrer"
                          href={child.path}
                        >
                          {child.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
