"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Testimonials = [
  {
    name: "Maria",
    avatar: "M",
    title: "Product Manager",
    description: "Fantastic app! It has greatly improved our workflow.",
  },
  {
    name: "John",
    avatar: "J",
    title: "Designer",
    description: "I love the user-friendly interface. Great job!",
  },
  {
    name: "Sarah",
    avatar: "S",
    title: "Marketing Specialist",
    description: "This app has revolutionized our marketing campaigns.",
  },
  {
    name: "Michael",
    avatar: "Mi",
    title: "Data Scientist",
    description:
      "As a data scientist, this app is a game-changer for data analysis.",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Project Manager",
    description:
      "Our project timelines have never been so streamlined. Impressive!",
  },
  {
    name: "David",
    avatar: "D",
    title: "Financial Analyst",
    description:
      "This app's financial reporting tools are top-notch. Highly recommended!",
  },
  {
    name: "Sophia",
    avatar: "So",
    title: "HR Manager",
    description:
      "Saves us so much time in HR tasks. Thanks for simplifying our work!",
  },
  {
    name: "Oliver",
    avatar: "O",
    title: "Sales Representative",
    description:
      "Boosted my sales performance. I can't imagine working without it.",
  },
  {
    name: "Grace",
    avatar: "G",
    title: "Customer Support",
    description:
      "Our customers love the improved support we provide using this app.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
