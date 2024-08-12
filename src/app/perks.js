"use client";

import { MapPinPlus, Dog, Book, Coffee } from "lucide-react";
import { Switch } from "./switch";

const perks = [
  {
    title: "Fully remote",
    description:
      "Richclicks is a fully remote company, as long as you respect the concorded schedule, you can work from wherever you want! 1/4 of our colleagues is currently on the moon",
    icon: <MapPinPlus size={30} className="flex-shrink-0" />,
    show: true,
    importanceScores: [10, 8, 7, 9, 10],
  },
  {
    title: "A pet friendly company",
    description:
      "Discover over 15 beautiful pets jumping in front of the camera of your colleagues! Find out which colleague have a raccoon",
    icon: <Dog size={30} className="flex-shrink-0" />,
    show: true,
    importanceScores: [10, 10, 9, 10],
  },
  {
    title: "Free coffee",
    description:
      "We offer free coffee to all our employees, shipping the best beans all over the world!",
    icon: <Coffee size={30} className="flex-shrink-0" />,
    show: true,
    importanceScores: [1, 2, 3],
  },
  {
    title: "Career development",
    description:
      "We offer a wide range of courses and certifications to help you grow in your career!",
    icon: <Book size={30} className="flex-shrink-0" />,
    show: false,
    importanceScores: [10, 10, 9, 10],
  },
];

export default function Perks() {
  // TODO 2: filter the perks based on the switch state and the show property of the perk
  // hint: the Switch component accepts a `checked`: boolean prop and `onCheckedChange`: (checked: boolean) => void prop

  return (
    <section>
      <div className="cont py-12">
        <h2 className="h2">Perks of working at Richclicks</h2>
        <p className="mt-2">
          Please note that the following perks are just example text to prove
          your coding skills and might not reflect the reality, but if you do
          own a raccoon we will keep it in consideration
        </p>
        <div className="flex items-center mt-4 gap-3">
          <Switch id="show-all-perks" />
          <label htmlFor="show-all-perks" className="font-bold">
            Show all perks
          </label>
        </div>
        <div className="mt-4">
          {/* TODO 1: show the perks according to result.png image, feel free to create additional components if needed */}
        </div>
      </div>
    </section>
  );
}
