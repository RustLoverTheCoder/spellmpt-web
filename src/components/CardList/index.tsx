import { Card, cardProps } from "./Card";

export const CardList = () => {
  const list: cardProps[] = [
    {
      title: "MarketPup for GPT-4",
      description: "Your kind and highly-skilled marketing helper.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
    },
    {
      title: "Duolingo Prompt",
      description: "Language learning like Duolingo - just without streaks.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
    },
    {
      title: "ChatGPT Formatting Guide",
      description: "Let ChatGPT tell you how to create proper formatting.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
    },
    {
      title: "Unlimited Digital Product Ideas",
      description: "Get started with your digital business now.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
    },
  ];
  return (
    <div className="w-full h-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {list.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};
