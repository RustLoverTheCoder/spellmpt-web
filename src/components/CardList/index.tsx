import { Card, cardProps } from "./Card";

type tag =
  | "学术"
  | "建议"
  | "有趣"
  | "其他"
  | "游戏"
  | "GPT-4"
  | "生活"
  | "娱乐"
  | "科技"
  | "社交"
  | "工具"
  | "写作";

export const CardList = () => {
  const list: cardProps[] = [
    {
      title: "MarketPup for GPT-4",
      description: "Your kind and highly-skilled marketing helper.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
      tags: ["学术", "生活"],
    },
    {
      title: "Duolingo Prompt",
      description: "Language learning like Duolingo - just without streaks.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
      tags: ["建议"],
    },
    {
      title: "ChatGPT Formatting Guide",
      description: "Let ChatGPT tell you how to create proper formatting.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
      tags: ["游戏"],
    },
    {
      title: "Unlimited Digital Product Ideas",
      description: "Get started with your digital business now.",
      type: "GPT",
      url: "/chatgpt/prompt/123",
      tags: ["社交"],
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
